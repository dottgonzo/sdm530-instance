import * as Promise from "bluebird";
import * as async from "async";

let ModbusRTU = require("modbus-serial");
let moment:any = require("moment-timezone");



interface Ireg {
    label: string;
    phase: number;
    reg: number;
    group: string;
}






function readReg(client, reg: number) {


    return new Promise(function (resolve, reject) {
        client.readInputRegisters(reg, 2).then(function (data) {


            resolve(data.buffer.readFloatBE());
        }).catch(function (err) {
            reject(err);
        });
    });

}

export default function (obj: { tz:string;uid:string; dev: string, address: number, baud: number, type?: string }) {
    return new Promise(function (resolve, reject) {
        let regs: Ireg[];
        let client = new ModbusRTU();

        if (!obj.type || obj.type === "import") {
            regs = [
                {
                    label: "voltage",
                    phase: 1,
                    reg: 0,
                    group: "strings"
                },
                {
                    label: "voltage",
                    phase: 2,
                    reg: 2,
                    group: "strings"
                },
                {
                    label: "voltage",
                    phase: 3,
                    reg: 4,
                    group: "strings"
                },
                {
                    label: "current",
                    phase: 1,
                    reg: 6,
                    group: "strings"
                },
                {
                    label: "current",
                    phase: 2,
                    reg: 8,
                    group: "strings"
                },
                {
                    label: "current",
                    phase: 3,
                    reg: 10,
                    group: "strings"
                },
                {
                    label: "power",
                    phase: 1,
                    reg: 12,
                    group: "strings"
                },
                {
                    label: "power",
                    phase: 2,
                    reg: 14,
                    group: "strings"
                },
                {
                    label: "power",
                    phase: 3,
                    reg: 16,
                    group: "strings"
                },
                {
                    label: "hz",
                    phase: 0,
                    reg: 70,
                    group: "grid"
                },
                {
                    label: "power",
                    phase: 0,
                    reg: 52,
                    group: "grid"
                },
                {
                    label: "voltage",
                    phase: 0,
                    reg: 42,
                    group: "grid"
                },
                {
                    label: "current",
                    phase: 0,
                    reg: 46,
                    group: "grid"
                },
                {
                    label: "peakMax",
                    phase: 0,
                    reg: 86,
                    group: "main"
                },
                {
                    label: "totalEnergy",
                    phase: 0,
                    reg: 72,
                    group: "main"
                }
            ];
        } else if (obj.type === "export") {
            regs = [
                {
                    label: "voltage",
                    phase: 1,
                    reg: 0,
                    group: "strings"
                },
                {
                    label: "voltage",
                    phase: 2,
                    reg: 2,
                    group: "strings"
                },
                {
                    label: "voltage",
                    phase: 3,
                    reg: 4,
                    group: "strings"
                },
                {
                    label: "current",
                    phase: 1,
                    reg: 6,
                    group: "strings"
                },
                {
                    label: "current",
                    phase: 2,
                    reg: 8,
                    group: "strings"
                },
                {
                    label: "current",
                    phase: 3,
                    reg: 10,
                    group: "strings"
                },
                {
                    label: "power",
                    phase: 1,
                    reg: 12,
                    group: "strings"
                },
                {
                    label: "power",
                    phase: 2,
                    reg: 14,
                    group: "strings"
                },
                {
                    label: "power",
                    phase: 3,
                    reg: 16,
                    group: "strings"
                },
                {
                    label: "hz",
                    phase: 0,
                    reg: 70,
                    group: "grid"
                },
                {
                    label: "power",
                    phase: 0,
                    reg: 52,
                    group: "grid"
                },
                {
                    label: "voltage",
                    phase: 0,
                    reg: 42,
                    group: "grid"
                },
                {
                    label: "current",
                    phase: 0,
                    reg: 46,
                    group: "grid"
                },
                {
                    label: "peakMax",
                    phase: 0,
                    reg: 86,
                    group: "main"
                },
                {
                    label: "totalEnergy",
                    phase: 0,
                    reg: 74,
                    group: "main"
                }
            ];

        }



        function start() {

            let answer = <any>{
                uid: obj.uid,
                address: obj.address,
                model: "sdm530",
                firmware: require("./package.json").version,
                active: true,
                grid: {},
                strings: [],
                updatedAt: parseInt(moment.tz("GMT").format("x")),
                date: moment.tz(obj.tz).format("YYYYMMDD-HH:mm:ss"),
                _id: "data_" + obj.uid + "_" + parseInt(moment.tz(obj.tz).format("x"))
            };

            async.eachSeries(regs, function (iterator, cb) {

                readReg(client, iterator.reg).then(function (d) {

                    if (iterator.group === "strings") {


                        if (!answer.strings[iterator.phase - 1]) {
                            answer.strings[iterator.phase - 1] = {};
                        }
                        answer.strings[iterator.phase - 1][iterator.label] = d;

                    } else if (iterator.group === "grid") {

                        answer.grid[iterator.label] = d;
                    } else if (iterator.group === "main") {
                        answer[iterator.label] = d;
                    }


                    cb();
                }).catch(function (err) {
                    cb(err);
                });

            }, function (err) {

                if (err) {
                    console.log(err);

                    reject(err);
                } else {

                    console.log(answer);
                    resolve(answer);
                    console.log("malformed data");
                }


            });

        }


        client.connectRTU(obj.dev, { baudrate: obj.baud }, start);


    })
}