// header start
const name = document.getElementById("header")
    let head=document.createElement("h1")
    head.innerText="Anumalasetty Surya Lakshmi Naga Sai Kiran"
    name.append(head)
    head.style.textAlign="center"
    head.style.paddingTop="5px"
    let list=document.createElement("ul")
    const arr=["Mobile number : +91-8897745384","Email id : 20kq1a0541cse@gmail.com","Linked In : www.linkedin.com/in/surya-anumalasetty-446b12227"]
    for(let user of arr){
        var li=document.createElement("li");
        li.innerText=user
        list.appendChild(li) 
        
    }
    list.style.textAlign="center"
    list.style.listStyleType="none"
    name.append(list)
    var hr=document.createElement("hr")
    name.append(hr)
    //header end

    //carrear start
    const carrear=document.getElementById("carrear")
    let head1=document.createElement("h2")
    head1.innerText="Carrear Objective:"
    head1.style.marginTop="5px"
    head1.style.textAlign="center"
    head1.style.textDecoration="underline"
    carrear.append(head1)
    let para=document.createElement("p")
    para.innerText="An aspiring software developer with a strong background in programming using Python and Java, recently graduated with a degree in Computer Science. Experienced in delivering academic projects and internships,with a strong desire to develop innovative applications and contribute to team success within a collaborative working environment."
    para.style.padding="3px"
    para.style.textAlign="center"
    carrear.append(para)
    var hr=document.createElement("hr")
    // name.append(hr)
    carrear.append(hr)
    //carrear End

    //Education start
    const edu=document.getElementById("Education")
    let head2=document.createElement("h2")
    head2.innerText="Education Details:"
    head2.style.marginTop="5px"
    head2.style.marginBottom="5px"
    head2.style.textAlign="center"
    head2.style.textDecoration="underline"
    carrear.append(head2)
    let table=document.createElement("table")
    table.style.border="1px solid black";
    table.style.borderCollapse = "collapse";
    table.style.width="90%";
    table.style.margin="5px auto";
    let thead=[["College/School Name","Degree Type","Year of Passing","CGPA"],["PACE Institute of Technology and Sciences","Bachelor of Technology","2024","8.32"],["Sri Medhavi Junior College","Intermediate","2020","8.83"],["Sri Vasavi High School","Secondary Education","2018","8.80"]]
    for(let i of thead){
        let tr=document.createElement("tr")
        for(let j of i){
            let td=document.createElement("td")
            td.innerText=j;
            tr.appendChild(td)
            td.style.border="1px solid black";
            td.style.textAlign="center";
            tr.style.border="1px solid black";
        }
        table.appendChild(tr)
        
    }
    edu.appendChild(table)
    var hr1=document.createElement("hr")
    edu.append(hr1)
    //Education Section End
    //Skills
    const skills=document.getElementById("skills")
    let head3=document.createElement("h2")
    head3.innerText="Skills:"
    head3.style.marginTop="5px"
    head3.style.marginBottom="5px"
    head3.style.textAlign="center"
    head3.style.textDecoration="underline"
    skills.append(head3)
    let list1=document.createElement("ul")
    const arr1=["Programming Languages: Python, Java, C","Web Development: HTML, CSS, JavaScript, Node.js, Express.js","Database Management: SQL, MongoDB","Version Control: GitHub", "Tools: Visual Studio Code, ANACONDA, Windows 10 & 11"]
    for(let a of arr1){
        var li1=document.createElement("li");
        li1.innerText=a
        li1.style.marginLeft="20px"
        list1.appendChild(li1) 
        
    }
    li1.style.listStyleType="disc"
    console.log(li1)
    skills.appendChild(list1)
    var hr1=document.createElement("hr")
    skills.append(hr1)
    //Skills Section End
    const project=document.getElementById("projects")
    let head4=document.createElement("h2")
    head4.innerText="Projects"
    head4.style.textAlign="center"
    head4.style.textDecoration="underline"
    project.append(head4)
    let sub_head1=document.createElement("h3")
    sub_head1.innerText="PERSONAL PORTFOLIO [Skills: Html | CSS | NodeJs | ExpressJs | MongoDB]"
    project.appendChild(sub_head1)
    let unorder=document.createElement("ul")
    arr2=["Developed and deployed a personal portfolio website to showcase my skills, projects and professional details. Designed a clean and professional user interface.","Implemented a responsive design for optimal viewing on various devices. Hosted the website on GitHub pages to ensure easy access and efficient version control."]
    for(let b of arr2){
        let list_e=document.createElement("li")
        list_e.innerText=b
        unorder.appendChild(list_e)
    }
    project.append(unorder)
