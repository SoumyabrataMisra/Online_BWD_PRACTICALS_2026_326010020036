// JavaScript Array containing subject information
const subjects = [
  {
    name: "Entrepreneurship",
    code: "BCA-ENT",
    credits: "4 Credits",
    semester: "Semester 1",
    description: "Introduces students to entrepreneurship, business ideas, innovation, opportunity identification, business planning, and the fundamentals of starting and managing a venture.",
    skills: "Innovation, business planning, communication"
  },
  {
    name: "Mathematics",
    code: "BCA-MAT",
    credits: "4 Credits",
    semester: "Semester 1",
    description: "Develops mathematical thinking required for computing, including logical reasoning, algebraic concepts, statistics, and problem-solving techniques.",
    skills: "Logical reasoning, calculations, problem solving"
  },
  {
    name: "Computer Architecture and Organization",
    code: "BCA-CAO",
    credits: "4 Credits",
    semester: "Semester 1",
    description: "Explains the internal structure of computers, processor organization, memory systems, input/output systems, and how computer components work together.",
    skills: "Hardware concepts, CPU, memory and I/O"
  },
  {
    name: "Programming Practices",
    code: "BCA-PP",
    credits: "4 Credits",
    semester: "Semester 1",
    description: "Builds practical programming skills through algorithms, problem solving, coding techniques, debugging, and structured programming practices.",
    skills: "Programming, algorithms, debugging"
  },
  {
    name: "Basics of Web Development",
    code: "BCA-WEB",
    credits: "4 Credits",
    semester: "Semester 1",
    description: "Introduces the foundations of web development using HTML, CSS, JavaScript, responsive design, web forms, and interactive webpage development.",
    skills: "HTML, CSS, JavaScript, responsive design"
  },
  {
    name: "Environmental Science",
    code: "BCA-ES",
    credits: "3 Credits",
    semester: "Semester 1",
    description: "Provides awareness of ecosystems, natural resources, pollution, sustainability, environmental protection, and responsible use of technology.",
    skills: "Sustainability, environmental awareness"
  }
];

// Get page elements
const subjectButtons = document.getElementById("subjectButtons");
const subjectDetails = document.getElementById("subjectDetails");

// Function to display subject buttons using the array
function displaySubjectList() {
  subjects.forEach((subject, index) => {
    const button = document.createElement("button");
    button.className = "subject-button";
    button.textContent = subject.name;

    // JavaScript event: click
    button.addEventListener("click", function () {
      showSubjectInfo(index);
    });

    subjectButtons.appendChild(button);
  });
}

// Function to display selected subject information
function showSubjectInfo(index) {
  const subject = subjects[index];

  subjectDetails.innerHTML = `
    <h2 class="detail-title">${subject.name}</h2>
    <p class="detail-description">${subject.description}</p>

    <div class="info-grid">
      <div class="info-card">
        <strong>Subject Code</strong>
        <span>${subject.code}</span>
      </div>

      <div class="info-card">
        <strong>Credits</strong>
        <span>${subject.credits}</span>
      </div>

      <div class="info-card">
        <strong>Semester</strong>
        <span>${subject.semester}</span>
      </div>

      <div class="info-card">
        <strong>Key Skills</strong>
        <span>${subject.skills}</span>
      </div>
    </div>
  `;

  // Highlight the selected button
  const buttons = document.querySelectorAll(".subject-button");
  buttons.forEach(button => button.classList.remove("active"));
  buttons[index].classList.add("active");
}

// Display subjects when the webpage loads
displaySubjectList();
