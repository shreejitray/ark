
var c = {
    name:'this is an object',
    log: function () {
        //console.log(this);
        this.newObjectVariable='shreejit';
        this.parent.value1='ray';
        function func2 (){
            this.name1='updated name';
            (function (){
                this.name2='udpatedname';
            })();
        }
        this.b.blog();
        console.log('inside c, b parent');
        func2();
        console.log(this);
        console.log(name1);
    },
    parent:this,
    b:{
        parent:this,
        blog: function() {
            this.parent.value = 'value';
            console.log('inside b');
            console.log(this);
        }
    }
}
//c.log();
// c.b.blog();
// console.log('printing this');
// console.log(this);
// console.log(c.newObjectVariable);
// console.log(c.parent);
// console.log(this.value1);
// console.log(name1);
// console.log(name2);
// console.log(c.b.parent);
//
// function a (){
//     this.name1='value';
// }
// a();
// console.log(name1);
