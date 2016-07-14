"use strict";
function default_1(configs) {
    function checkDate() {
        var that = this;
        function checkRemote() {
            rpj.get("https://io.kernel.online/date").then(function (date) {
                console.log(date);
                if (new Date().getTime() > (date.unixtime - 90000)) {
                    console.log("time is valid from now");
                    that.validDate = true;
                }
                else {
                    checkRemote();
                }
            }).catch(function (err) {
                console.log(err);
                checkRemote();
            });
        }
        checkRemote();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFTQSxtQkFBeUIsT0FBZ0I7SUFFekM7UUFDUSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEI7WUFDSSxHQUFHLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtnQkFFdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLFdBQVcsRUFBRSxDQUFDO2dCQUNsQixDQUFDO1lBRUwsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVMsR0FBRztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsV0FBVyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsV0FBVyxFQUFFLENBQUM7SUFDbEIsQ0FBQztBQUlMLENBQUM7QUEzQkQ7MkJBMkJDLENBQUEiLCJmaWxlIjoibXVsdGlwbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2RtNTMwIGZyb20gJy4vaW5kZXgnXG5cbmludGVyZmFjZSBJY29uZmlncyB7XG5cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbmZpZ3M6SWNvbmZpZ3Mpe1xuXG5mdW5jdGlvbiAgY2hlY2tEYXRlKCkge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrUmVtb3RlKCkge1xuICAgICAgICAgICAgcnBqLmdldChcImh0dHBzOi8vaW8ua2VybmVsLm9ubGluZS9kYXRlXCIpLnRoZW4oZnVuY3Rpb24oZGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgPiAoZGF0ZS51bml4dGltZSAtIDkwMDAwKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRpbWUgaXMgdmFsaWQgZnJvbSBub3dcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudmFsaWREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGVja1JlbW90ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICBjaGVja1JlbW90ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja1JlbW90ZSgpO1xuICAgIH1cblxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
