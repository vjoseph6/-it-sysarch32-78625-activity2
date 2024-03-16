function Student({studentImage, studentName, studentAlias}){
    return(
        <div className="student">
            <img className="student-image" src={studentImage} alt="profile picture"></img>
            <h2 className="student-name">{studentName}</h2>
            <p className="student-alias">{studentAlias}</p>
        </div>
    );
}

export default Student