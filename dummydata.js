const dummy_data=[{
    "id":"1",
    "image":"/img/cat-1.jpg",
    "title":"Web Design",
    "allCourses":"100 Courses"
},
{
    "id":"2",
    "image":"/img/cat-2.jpg",
    "title":"Development",
    "allCourses":"100 Courses"
},
{
    "id":"3",
    "image":"/img/cat-3.jpg",
    "title":"Gane Design",
    "allCourses":"100 Courses"
},
{
    "id":"4",
    "image":"/img/cat-4.jpg",
    "title":"App Design",
    "allCourses":"100 Courses"
},
{
    "id":"5",
    "image":"/img/cat-5.jpg",
    "title":"Marketing",
    "allCourses":"100 Courses"
},
{
    "id":"6",
    "image":"/img/cat-6.jpg",
    "title":"Research",
    "allCourses":"100 Courses"
},

{
    "id":"7",
    "image":"/img/cat-7.jpg",
    "title":"SEO",
    "allCourses":"100 Courses"
},
{
    "id":"8",
    "image":"/img/cat-8.jpg",
    "title":"Content Writhing",
    "allCourses":"100 Courses"
}]
export function subjectDetailPage(id){
    return dummy_data.find((item)=>item.id===id)
}