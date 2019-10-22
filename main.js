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
  show(e);         //並啟動show函式中的所動作
},false);  //如果沒有則甚麼事都沒發生



//**---function區---***

//**--宣告函式主要當使用者按下button時，觸發事件發生--**
 function show() {
   let ul = document.getElementById("my-todo");  //先抓取要放入資料的分節點id並放入 ul裡面
   let fragment = document.createDocumentFragment(); //建立一個DocumentFragment = 暫時放置區
for (let i = 0 ; i< todos.length; i++){        //利用迴圈取陣列裡面的長度
  let li=document.createElement("li");        // 建立一個li 的子分節點
  li.className = "todolist" + (i+1); //建立 li的class名稱
  li.id = "list"+ (i+1); ///建立 li的id名稱
  li.appendChild(document.createTextNode(todos[i]));
  //增加節點(appendChild)，並依據陣列值長度增加他的子節點長度
  fragment.appendChild(li);  //在暫時存放區內增加 子節點(li)
}
ul.appendChild(fragment);  //將先前取的父節點內，將先前所設定的暫時放置去內的所有東西都加入倒ul的父節點當中
}

