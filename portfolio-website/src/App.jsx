

export default function App() {


  const workExperience = [

    {company: "CGI", position: "Business & Technical Analyst (Co-op Work Term)", startDate: "May 2026", endDate: "Present", reponsibilities: ["Developed a full-stack web application using React, Node.js, and PostgreSQL to automate internal processes with a goal of increasing efficiency and reducing time spent on manual tasks.", "Worked on a small team from the United States as a Junior Business Analyst to help a client make decisions regarding their internal automation processes. This involved gathering requirements, analyzing data, and providing recommendations to improve efficiency and reduce costs.", "Collaborated with other students and professionals to make decisions regarding the best practices for implementing the internal client's requirements. This involved researching and analyzing different technologies and approaches to determine the most effective solution." ]},

    {company: "CGI", position: "Developer (Co-op Work Term)", startDate: "May 2025", endDate: "August 2025", responsibilities: ["Contributed to the development and maintenance of an ASP.NET web application in an Agile, team-based environment", "Implemented and updated frontend features using HTML and CSS and worked with SQL to support data requirements", "Worked on assigned request items and tickets, implementing enhancements, fixes, and updates in alignment with client and project requirements", "Collaborated with team member to design and deliver efficient solutions while meeting sprint goals and deadlines", "Expanded technical knowledge through hands-on developemnt, independent research, and formal training."]},

    {company: "CGI", position: "Technology Consultant (Co-op Work Term)", startDate: "September 2024", endDate: "December 2024", responsibilities: ["Worked with the Endpoint Services team to deliver technical support for device management, software troubleshooting, and Microsoft Intune-related challenges", "Managed daily IT tasks, ensuring efficient client communication.", "Grew a deeper technical understanding of Windows and other operating systems through firsthand experience and training.", "Facilitated productive client interactions, ensuring issues were resolved efficiently and professionally."]},

    {company: "University of New Brunswick", position: "Student Consultant (Co-op Work Term)", startDate: "September 2023", endDate: "December 2024", responsibilities: ["Reviewed, analyzed, and resolved IT issues of all types.", "Provided in-person IT support as well as managed support requests via phone calls and through and online ticketing system.", "Collaborated with team members to achieve shared goals and investigated recurring problems to implement long-term solutions.", "Worked with various operating systems such as Windows, MacOS, Linux, iOS, and Android."]}

  ]

  return (
    <div className="bg-yellow-50 w-full min-h-screen">
      <h1 className="text-4xl font-semibold font-serif pt-20 pl-6">Sierra Howe</h1>
      <div className="flex items-center">
        <img src="/underline.png" className="w-60 h-32 pr-3 pl-6 -mt-9"/>
        <></>
      </div>

      <div>
        <p className="text-lg leading-relaxed pl-6 pr-6 pt-6 -mt-6 font-serif">
          A fifth-year Computer Science student at the University of New Brunwick. I am passionate about combining technical skills with creative problem-solving to deliver innovative solutions.
        </p>
      </div>
    </div>
  )


}