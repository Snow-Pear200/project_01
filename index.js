const del = document.querySelectorAll(".del")
const reduce = document.querySelectorAll(".reduce")
const number = document.querySelectorAll(".number")
const add = document.querySelectorAll(".add")
const total = document.querySelectorAll(".total")
const price = document.querySelectorAll(".price")
const all_total = document.querySelector(".all_total")

//删除
for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode)
        zongjia()
        sel()

        //单选控制多选
        chk_list = document.querySelectorAll(".chk_list")
        //多选控制单选
        chk_all = document.querySelector(".chk_all")
        bottom_chk = document.querySelector(".bottom_chk")
        chk_all.checked = document.querySelectorAll('.chk_list:checked').length === chk_list.length
        bottom_chk.checked = document.querySelectorAll('.chk_list:checked').length === chk_list.length
    })
}

//数量加减
let num
for (let i = 0; i < add.length; i++) {
    add[i].addEventListener("click", function () {
        num = this.parentNode.children[5].innerText++
        number.innerText = num
        xiaoji(this)
        zongjia()
    })
}

for (let i = 0; i < reduce.length; i++) {
    reduce[i].addEventListener("click", function () {
        num = this.parentNode.children[5].innerText
        if (num <= 1) return alert('不能少于一件')
        num--
        this.parentNode.children[5].innerText = num
        xiaoji(this)
        zongjia()
    })
}

//复选框
let chk_all = document.querySelector(".chk_all")
let chk_list = document.querySelectorAll(".chk_list")
let bottom_chk = document.querySelector(".bottom_chk")
const selected = document.querySelector(".selected")
const del_selected = document.querySelector(".del_selected")


//全选控制单个
chk_all.addEventListener('click', function () {
    for (let i = 0; i < chk_list.length; i++) {
        chk_list[i].checked = chk_all.checked
        bottom_chk.checked = chk_all.checked
    }
    sel()
    zongjia()
})

bottom_chk.addEventListener('click', function () {
    for (let i = 0; i < chk_list.length; i++) {
        chk_list[i].checked = bottom_chk.checked
    }
    chk_all.checked = bottom_chk.checked
    sel()
    zongjia()
})

//单个控制全选
for (let i = 0; i < chk_list.length; i++) {
    chk_list[i].addEventListener('click', function () {
        chk_all.checked = document.querySelectorAll('.chk_list:checked').length === chk_list.length
        sel()
        zongjia()
    })
}
for (let i = 0; i < chk_list.length; i++) {
    chk_list[i].addEventListener('click', function () {
        bottom_chk.checked = document.querySelectorAll('.chk_list:checked').length === chk_list.length
        sel()
        zongjia()
    })
}

//已选
function sel() {
    selected.innerText = `${document.querySelectorAll('.chk_list:checked').length}`
}
sel()

//删除选中
del_selected.addEventListener("click", function () {
    let cked = document.querySelectorAll('.chk_list:checked')
    for (let i = 0; i < cked.length; i++) {
        cked[i].parentNode.parentNode.removeChild(cked[i].parentNode)
    }
    sel()
    zongjia()


    chk_list = document.querySelectorAll(".chk_list")
    for (let i = 0; i < chk_list.length; i++) {
        chk_list[i].addEventListener('click', function () {
            chk_all.checked = document.querySelectorAll('.chk_list:checked').length === chk_list.length
            sel()
            zongjia()
        })
    }
})

//小计
function xiaoji(ins) {
    for (let i = 0; i < total.length; i++) {
        ins.parentNode.children[7].innerText = Number(ins.parentNode.children[3].innerText) * Number(ins.parentNode.children[5].innerText)
    }
}
for (let i = 0; i < add.length; i++) {
    xiaoji(add[i])
}

//总价
function zongjia() {
    let sum = 0
    let cked = document.querySelectorAll('.chk_list:checked')
    for (let i = 0; i < cked.length; i++) {
        sum += Number(cked[i].parentNode.children[7].innerText)
    }
    all_total.innerText = sum
}

//去结算
const gopay = document.querySelector(".gopay")
gopay.addEventListener("click", function () {
    if (selected.innerText == 0) {
        alert("最少选一个")
        return false
    }
})