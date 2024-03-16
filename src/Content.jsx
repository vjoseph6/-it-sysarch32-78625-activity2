import Student from "./Student";

function Content() {
  const students = [
    {
      studentImage: "https://th.bing.com/th/id/OIP.qHIJUm8PUSQ3NoGYJ4A_TwHaHa?w=615&h=615&rs=1&pid=ImgDetMain",
      studentName: "Anthony Stark",
      studentAlias: "Iron Man"
    },
    {
      studentImage: "https://th.bing.com/th/id/OIP.wRlJcNlseX8Ob7zRSk2CsgHaHa?rs=1&pid=ImgDetMain",
      studentName: "Brei Larson",
      studentAlias: "Captain Marvel"  
    },
    {
      studentImage: "https://th.bing.com/th/id/R.6fb921c1e35102b06cbfbfe3d8b5dec9?rik=mKkZI8vN4e%2f5tQ&riu=http%3a%2f%2fstatic.tvtropes.org%2fpmwiki%2fpub%2fimages%2fmcu_scott_lang.png&ehk=iIQ2EhSk4eaQW83NSQlutT%2bOjYYnKCUs%2bgdaD9Io4Aw%3d&risl=&pid=ImgRaw&r=0",
      studentName: "Henry Jonathan",
      studentAlias: "Ant Man"       
    },
    {
      studentImage: "https://th.bing.com/th/id/OIP.tkGdpebKKIrZGquHZizG7AAAAA?w=320&h=320&rs=1&pid=ImgDetMain",
      studentName: "Christ Hemsworth",
      studentAlias: "Thor Odinson" 
        
    },
    {
      studentImage: "https://th.bing.com/th/id/OIP.y4QD-hm9oZ9WhqqSc69M_gHaHa?w=900&h=900&rs=1&pid=ImgDetMain",
      studentName: "Peter Parker",
      studentAlias: "Spider Man" 
        
    },

    
  ];

  return (
    <div>
      {students.map(({ studentImage, studentName, studentAlias }, index) => (
        <Student
          key={index}
          studentImage={studentImage}
          studentName={studentName}
          studentAlias={studentAlias}
        />
      ))}
    </div>
  );
}

export default Content;
