var Mon_arr = [];
var Tue_arr = [];
var Wed_arr = [];
var Thu_arr = [];
var Fri_arr = [];

function click_btn_Add_ToDo(){//숨겨져있던 addtodo 창을 띄움
  document.getElementById("window_Add_ToDo").style.display = "block";
}

function temp(){//addtodo창을 닫음
  document.getElementById("window_Add_ToDo").style.display="none";
}

function temp2(){//addtodo_edit창을 닫음
  document.getElementById("window_Add_ToDo_Edit").style.display="none";
}


//리스트에 엘리먼트 추가하는 함수
function btn_Add_ToDo_Complete(){///////////////////////////////////////////////////////////////////////
  var Selected_Day = document.getElementById("add_DaySelect").value; //처음 입력될때 선택된 요일
  var Selected_Title1 = document.getElementById("toDo_Title").value;
  var Selected_Contents1 = document.getElementById("toDo_Contents").value;

  var element_checkbox = document.createElement("input");
  element_checkbox.setAttribute("type", "checkbox"); // input type="checkbox"
  element_checkbox.setAttribute("onclick", "checkboxClick(event)");

  var ToDo_element = document.createElement('div');
  ToDo_element.setAttribute("draggable", "true");

  var Selected_Title = document.createTextNode(Selected_Title1);
  var Selected_Contents = document.createTextNode(Selected_Contents1);

  var current_day_div = document.createElement('div');
  var current_day = document.createTextNode(Selected_Day);
  current_day_div.appendChild(current_day);
  current_day_div.style.display = "none";
  var div_toDo_Title = document.createElement('div');
  div_toDo_Title.appendChild(Selected_Contents);
  div_toDo_Title.style = "display: none;";

  ToDo_element.appendChild(Selected_Title);       //0번째 노드
  ToDo_element.appendChild(element_checkbox);//1번째 버튼
  ToDo_element.appendChild(div_toDo_Title);       //2번째 디브 안의 노드
  ToDo_element.appendChild(current_day_div);      //3번째 디브 안의 노드

  switch (ToDo_element.childNodes[3].childNodes[0].data) {
    case "Monday":
      var Mon_ToDo_Element = document.getElementById("Mon_div");
      Mon_ToDo_Element.appendChild(ToDo_element);
      Mon_arr.push(ToDo_element);
      break;
    case "Tuesday":
      var Tue_ToDo_Element = document.getElementById("Tue_div");//부모노드
      Tue_ToDo_Element.appendChild(ToDo_element);//자식 붙이는것
      Tue_arr.push(ToDo_element);
      break;
    case "Wednesday":
      var Wed_ToDo_Element = document.getElementById("Wed_div");
      Wed_ToDo_Element.appendChild(ToDo_element);
      Wed_arr.push(ToDo_element);
      break;
    case "Thursday":
      var Thu_ToDo_Element = document.getElementById("Thu_div");
      Thu_ToDo_Element.appendChild(ToDo_element);
      Thu_arr.push(ToDo_element);
      break;
    case "Friday":
      var Fri_ToDo_Element = document.getElementById("Fri_div");
      Fri_ToDo_Element.appendChild(ToDo_element);
      Fri_arr.push(ToDo_element);
      break;
  }

  //ToDo_element.addEventListener("click",function(){//엘리먼트 클릭시 수정창
  ToDo_element.onclick = function(){///////////////////////////////////////////////////////////
    var div1 = document.getElementById("add_DaySelect2");
    div1.value = ToDo_element.childNodes[3].childNodes[0].data;

    var priority;
    switch (ToDo_element.childNodes[3].childNodes[0].data) {
      case "Monday":
        priority = Mon_arr.indexOf(this);
        break;
      case "Tuesday":
        priority = Tue_arr.indexOf(this);
        break;
      case "Wednesday":
        priority = Wed_arr.indexOf(this);
        break;
      case "Thursday":
        priority = Thu_arr.indexOf(this);
        break;
      case "Friday":
        priority = Fri_arr.indexOf(this);
        break;
    }
    var priority_div = document.getElementById("arr_Priority");
    priority_div.value = priority;
    var div2 = document.getElementById("toDo_Title_edit");
    div2.value = ToDo_element.childNodes[0].data;
    var div3 = document.getElementById("toDo_Contents_edit");
    div3.value = ToDo_element.childNodes[2].childNodes[0].data;

    document.getElementById("window_Add_ToDo_Edit").style.display = "block";

                                                                    //////////////////////////
    document.getElementById("btn_Add_ToDo_Edit_Complete").onclick = function(){//Done 버튼을 누르면 실행되는 함수
      ToDo_element.parentNode.removeChild(ToDo_element);
          //--------------------기존에 있던 배열에서 삭제
      var before_index;//기존에있던 배열에서의 인덱스
      switch (ToDo_element.childNodes[3].childNodes[0].data) {
        case "Monday":
          before_index = Mon_arr.indexOf(ToDo_element);
          Mon_arr.splice(before_index, 1);
          break;
        case "Tuesday":
          before_index = Tue_arr.indexOf(ToDo_element);
          Tue_arr.splice(before_index, 1);
          break;
        case "Wednesday":
          before_index = Wed_arr.indexOf(ToDo_element);
          Wed_arr.splice(before_index, 1);
          break;
        case "Thursday":
          before_index = Thu_arr.indexOf(ToDo_element);
          Thu_arr.splice(before_index, 1);
          break;
        case"Friday":
          before_index = Fri_arr.indexOf(ToDo_element);
          Fri_arr.splice(before_index, 1);
          break;
      }//-------------------------기존에 있던 배열에서 삭제 끝

      //-----------------------수정된 done 창에서 입력값을 받아온다.
      var edited_Day = document.getElementById("add_DaySelect2").value;
      var edited_Priority = document.getElementById("arr_Priority").value;
      var edited_Todo_Title = document.getElementById("toDo_Title_edit").value;
      var edited_Todo_Contents = document.getElementById("toDo_Contents_edit").value;
      //수정창에서 요일, 우선순위, 타이틀, 콘텐츠 4가지 정보를 받아옴
      //배열에서 삭제후 같은 위치에 다시 저장 및 display에서도 removeChild해주면 됨

      //temp_Todo_Element의 값을 수정한다.
      ToDo_element.childNodes[0].data = edited_Todo_Title;
      ToDo_element.childNodes[2].childNodes[0].data = edited_Todo_Contents;//ToDo_element값 수정
      ToDo_element.childNodes[3].childNodes[0].data = edited_Day;

      //--------------------기존에 있던 원소의 수정 끝------------

      switch (edited_Day) {//배열에서 원소 삭제 후 다시 추가 insertBefore 함수 사용
        case "Monday":
          var temp_Mon_div = document.getElementById("Mon_div");
          Mon_arr.splice(edited_Priority, 0, ToDo_element);
          if(edited_Priority == 1){
            temp_Mon_div.insertBefore(ToDo_element, temp_Mon_div.childNodes[2]);
          }else temp_Mon_div.insertBefore(ToDo_element, temp_Mon_div.childNodes[edited_Priority]);
          break;
        case "Tuesday":
          var temp_Tue_div = document.getElementById("Tue_div");
          Tue_arr.splice(edited_Priority, 0, ToDo_element);
          if(edited_Priority == 1){
            temp_Tue_div.insertBefore(ToDo_element, temp_Tue_div.childNodes[2]);
          }else temp_Tue_div.insertBefore(ToDo_element, temp_Tue_div.childNodes[edited_Priority]);
          break;
        case "Wednesday":
          var temp_Wed_div = document.getElementById("Wed_div");
          Wed_arr.splice(edited_Priority, 0, ToDo_element);
          if(edited_Priority == 1){
            temp_Wed_div.insertBefore(ToDo_element, temp_Wed_div.childNodes[2]);
          }else temp_Wed_div.insertBefore(ToDo_element, temp_Wed_div.childNodes[edited_Priority]);
          break;
        case "Thursday":
          var temp_Thu_div = document.getElementById("Thu_div");
          Thu_arr.splice(edited_Priority, 0, ToDo_element);
          if(edited_Priority == 1){
            temp_Thu_div.insertBefore(ToDo_element, temp_Thu_div.childNodes[2]);
          }else temp_Thu_div.insertBefore(ToDo_element, temp_Thu_div.childNodes[edited_Priority]);
          break;
        case "Friday":
          var temp_Fri_div = document.getElementById("Fri_div");
          Fri_arr.splice(edited_Priority, 0, ToDo_element);
          if(edited_Priority == 1){
            temp_Fri_div.insertBefore(ToDo_element, temp_Fri_div.childNodes[2]);
          }else temp_Fri_div.insertBefore(ToDo_element, temp_Fri_div.childNodes[edited_Priority]);
          break;
      }
      document.getElementById("window_Add_ToDo_Edit").style.display="none";
    }
  };


  /*element_checkbox.onclick = function(){//이미지 버튼에 삭제기능 구현/////////////////////////////
    event.stopPropagation();//부모노드로 이벤트 전파 방지
    switch (Selected_Day) {
      case "Monday":
        Mon_arr.splice(Mon_arr.indexOf(this.parentNode),1);
        break;
      case "Tuesday":
        Tue_arr.splice(Tue_arr.indexOf(this.parentNode),1);
        break;
      case "Wednesday":
        Wed_arr.splice(Wed_arr.indexOf(this.parentNode),1);
        break;
      case "Thursday":
        Thu_arr.splice(Thu_arr.indexOf(this.parentNode),1);
        break;
      case "Friday":
        Fri_arr.splice(Fri_arr.indexOf(this.parentNode),1);
        break;
    }
    this.parentNode.parentNode.removeChild(this.parentNode);
  }; */
  ToDo_element.style.display = "block";
  ToDo_element.style.border= "1px solid";
  ToDo_element.style.backgroundColor = "white";
  document.getElementById("window_Add_ToDo").style.display="none";
}


//---------------------검색 함수
function onKeyDown(){
    var mondiv = document.getElementById("Mon_div");
    var tuediv = document.getElementById("Tue_div");
    var weddiv = document.getElementById("Wed_div");
    var thudiv = document.getElementById("Thu_div");
    var fridiv = document.getElementById("Fri_div");

    var search_keyword = document.getElementById("search_area").value;//검색할 키워드 가져옴
    var want_search_day = document.getElementById("search_day").value;

    switch (want_search_day) {
      case "allday":
        for(var i = 0; i < Mon_arr.length; i++){
          if(Mon_arr[i].innerText.match(search_keyword)){
            Mon_arr[i].style.display = "block";
          }else Mon_arr[i].style.display = "none";
        }
        for(var i = 0; i < Tue_arr.length; i++){
          if(Tue_arr[i].innerText.match(search_keyword)){
            Tue_arr[i].style.display = "block";
          }else Tue_arr[i].style.display = "none";
        }
        for(var i = 0; i < Wed_arr.length; i++){
          if(Wed_arr[i].innerText.match(search_keyword)){
            Wed_arr[i].style.display = "block";
          }else Wed_arr[i].style.display = "none";
        }
        for(var i = 0; i < Thu_arr.length; i++){
          if(Thu_arr[i].innerText.match(search_keyword)){
            Thu_arr[i].style.display = "block";
          }else Thu_arr[i].style.display = "none";
        }
        for(var i = 0; i < Fri_arr.length; i++){
          if(Fri_arr[i].innerText.match(search_keyword)){
            Fri_arr[i].style.display = "block";
          }else Fri_arr[i].style.display = "none";
        }
        break;
      case "Monday":
        for(var i = 0; i < Mon_arr.length; i++){
          if(Mon_arr[i].innerText.match(search_keyword)){
            Mon_arr[i].style.display = "block";
          }else Mon_arr[i].style.display = "none";
        }
        tuediv.style.display = "none";
        weddiv.style.display = "none";
        thudiv.style.display = "none";
        fridiv.style.display = "none";
        break;
      case "Tuesday":
        for(var i = 0; i < Tue_arr.length; i++){
          if(Tue_arr[i].innerText.match(search_keyword)){
            Tue_arr[i].style.display = "block";
          }else Tue_arr[i].style.display = "none";
        }
        mondiv.style.display = "none";
        weddiv.style.display = "none";
        thudiv.style.display = "none";
        fridiv.style.display = "none";
        break;
      case "Wednesday":
        for(var i = 0; i < Wed_arr.length; i++){
          if(Wed_arr[i].innerText.match(search_keyword)){
            Wed_arr[i].style.display = "block";
          }else Wed_arr[i].style.display = "none";
        }
        mondiv.style.display = "none";
        tuediv.style.display = "none";
        thudiv.style.display = "none";
        fridiv.style.display = "none";
        break;
      case "Thursday":
        for(var i = 0; i < Thu_arr.length; i++){
          if(Thu_arr[i].innerText.match(search_keyword)){
            Thu_arr[i].style.display = "block";
          }else Thu_arr[i].style.display = "none";
        }
        mondiv.style.display = "none";
        tuediv.style.display = "none";
        weddiv.style.display = "none";
        fridiv.style.display = "none";
        break;
      case "Friday":
        for(var i = 0; i < Fri_arr.length; i++){
          if(Fri_arr[i].innerText.match(search_keyword)){
            Fri_arr[i].style.display = "block";
          }else Fri_arr[i].style.display = "none";
        }
        mondiv.style.display = "none";
        tuediv.style.display = "none";
        weddiv.style.display = "none";
        thudiv.style.display = "none";
        break;
    }//switch문 종료

    if(want_search_day == "allday" && search_keyword == ""){
      for(var i = 0; i < Mon_arr.length; i++){
          Mon_arr[i].style.display = "block";
      }
      for(var i = 0; i < Tue_arr.length; i++){
          Tue_arr[i].style.display = "block";
      }
      for(var i = 0; i < Wed_arr.length; i++){
          Wed_arr[i].style.display = "block";
      }
      for(var i = 0; i < Thu_arr.length; i++){
          Thu_arr[i].style.display = "block";
      }
      for(var i = 0; i < Fri_arr.length; i++){
          Fri_arr[i].style.display = "block";
      }
    }
}

function checkboxClick(event) { //checkbox click시 check만 되도록함
  event.stopPropagation();
}

$(function () {
    $('#deleteButton').click(function () { //checked된 Todo를 전부 삭제
        $('input:checkbox').each(function () {
            if (this.checked == true) {
                $(this).parent().remove();
            }
        })
    });

  $('.saveData').click(function () {
      $.ajax({
          url: '/server.jsp',
          dataType: 'text',
          type: 'post',
          data: {

          },

      });
  });
});