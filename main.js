// init
const todos = [
  "早起吃早餐",
  "不情願地去上課",
  "心情好的時候翹課",
  "去公司吹冷氣吃零食"
];



//**---邏輯宣告區---***

//**--宣告butshow當按鈕被按時(click)，會觸發show事件發生--**



let btnshow = document.getElementById('addBtn');  //先抓取addBtn並放入到btnshow中
btnshow.addEventListener('click',function (e) {   //對btnshow執行監聽動作，如果有發生click按鈕時，觸發函式
  let liNote =document.getElementsByTagName('li'); //將子節點的長度放入到liNote
  let kk = document.getElementById("newTodo").value; //將input內的值放入kk當中
  let todoslg  = todos.length;  //取todos內的長度值
  //如果Input內不是空值的話，則將KK加入倒todos內
  if (kk != "") {
    todos.push(kk);
  }
  //如果 todos長度大於目前顯示的子節點的長度時，則刪除所有節點，目的是讓資料從新抓取todos內的資料到網頁上，避免畫面資料一值累加
  if (todos.length > liNote.length) {
    clearg(e);
    show(e);
  }
  clear(e);
},false);  //如果沒有則甚麼事都沒發生




//**---function區---***

//**--宣告函式主要當使用者按下button時，觸發事件發生--**
function show() {
  let ul = document.getElementById("my-todo"); //先抓取要放入資料的分節點id並放入 ul裡面
  let fragment = document.createDocumentFragment(); //建立一個DocumentFragment = 暫時放置區
  for (let i = 0; i < todos.length; i++) { //利用迴圈取陣列裡面的長度
    let li = document.createElement("li"); // 建立一個li 的子分節點
    li.id = "list"+[i] ;
    li.className = "col-2  d-flex justify-content-between align-self-center  mb-3";
    li.appendChild(document.createTextNode(todos[i])); //增加節點(appendChild)，並依據陣列值長度增加他的子節點長度
    fragment.appendChild(li); //在暫時存放區內增加 子節點(li)
    ul.appendChild(fragment); //將先前取的父節點內，將先前所設定的暫時放置去內的所有東西都加入倒ul的父節點當中
  }

//在List後面增加fas fa-trash-alt 垃圾桶圖示
  for (let i = 0; i < todos.length; i++) {
    let li = document.getElementById("list" + [i]);
    let fragment1 = document.createDocumentFragment();
    let bn = document.createElement("button");
    bn.id = "delbn";
    bn.onclick = "Display:none"
    bn.className = " btn fas fa-trash-alt btn-info ";
    fragment1.appendChild(bn);
    li.appendChild(fragment1);
  }
//**--宣告delt當按鈕被按時(click)，會觸發刪除事件發生--**

}

//**--清除input框內的植--**
function clear() {
  document.getElementById("newTodo").value = '';
}

//**--刪除所有子節點--**
function clearg() {
  let f = document.getElementById("my-todo");
  let childs = f.childNodes;
  for(var i = childs.length - 1; i >= 0; i--) {
    f.removeChild(childs[i]);
  }
}




