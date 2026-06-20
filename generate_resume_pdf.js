import fs from 'fs';
import PDFDocument from 'pdfkit';

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/Aman_Naeem_Resume.pdf'));

// Fonts and Styling Constants
const primaryColor = '#000000';
const secondaryColor = '#333333';
const linkColor = '#0066cc';

// Helper for section headers
const addSectionHeader = (title) => {
  doc.moveDown(1);
  doc.font('Helvetica-Bold').fontSize(16).fillColor(primaryColor).text(title);
  doc.moveTo(50, doc.y + 2).lineTo(550, doc.y + 2).strokeColor('#cccccc').stroke();
  doc.moveDown(0.5);
};

// --- HEADER ---
doc.font('Helvetica-Bold').fontSize(28).fillColor(primaryColor).text('Aman Naeem', { align: 'center' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(11).fillColor(secondaryColor)
   .text('Aspiring Web Developer | 7827392589 | amannaeem78654@gmail.com', { align: 'center' });
doc.text('LinkedIn: linkedin.com/in/amannaeem | GitHub: github.com/amannaeem', { align: 'center' });

// --- EDUCATION ---
addSectionHeader('Education');
doc.font('Helvetica-Bold').fontSize(12).fillColor(primaryColor).text('Greater Noida Institute of Technology', { continued: true });
doc.font('Helvetica').fillColor(secondaryColor).text(' | B.Tech in Computer Science | 2021 to 2025 | Percentage: 68%');

doc.moveDown(0.3);
doc.font('Helvetica-Bold').fontSize(12).fillColor(primaryColor).text('Bal Vidyalaya Noor Nagar', { continued: true });
doc.font('Helvetica').fillColor(secondaryColor).text(' | Senior Secondary School (PCM) | Grad: Aug 2021 | Percentage: 81.2%');

doc.moveDown(0.3);
doc.font('Helvetica-Bold').fontSize(12).fillColor(primaryColor).text('National Public School', { continued: true });
doc.font('Helvetica').fillColor(secondaryColor).text(' | Secondary School | Grad: May 2019 | Percentage: 79%');

// --- PROJECTS ---
addSectionHeader('Projects');
doc.font('Helvetica-Bold').fontSize(12).fillColor(primaryColor).text('E - Learning Platform | ', { continued: true });
doc.font('Helvetica-Oblique').text('HTML, CSS, JAVASCRIPT', { continued: true });
doc.font('Helvetica').fillColor(linkColor).text(' <src code>', { link: '#' });

doc.font('Helvetica').fontSize(11).fillColor(secondaryColor);
doc.list([
  'Developed a platform enabling the transfer of skills and knowledge through network-based technologies.',
  'Integrated YouTube video embedding to provide smooth and accessible course content delivery.',
  'Implemented advanced search, filtering, and sorting functionalities.',
  'Built local authentication system (Login/Signup) utilizing JavaScript and Local Storage.'
], { bulletRadius: 2 });

doc.moveDown(0.5);
doc.font('Helvetica-Bold').fontSize(12).fillColor(primaryColor).text('My Portfolio | ', { continued: true });
doc.font('Helvetica-Oblique').text('HTML, CSS, JAVASCRIPT, REACT', { continued: true });
doc.font('Helvetica').fillColor(linkColor).text(' <src code>', { link: '#' });

doc.font('Helvetica').fontSize(11).fillColor(secondaryColor);
doc.list([
  'Designed and developed a fully responsive portfolio to effectively showcase skills.',
  'Integrated a GitHub repository within the portfolio to provide access to source code.',
  'Managed deployment of the portfolio website with regular updates.'
], { bulletRadius: 2 });

// --- SKILLS ---
addSectionHeader('Skills');
doc.font('Helvetica-Bold').fontSize(11).fillColor(primaryColor).text('Programming Languages: ', { continued: true });
doc.font('Helvetica').fillColor(secondaryColor).text('JavaScript, Python');

doc.moveDown(0.2);
doc.font('Helvetica-Bold').text('Tools: ', { continued: true });
doc.font('Helvetica').fillColor(secondaryColor).text('VS Code, Git, GitHub');

doc.moveDown(0.2);
doc.font('Helvetica-Bold').text('Web Technologies: ', { continued: true });
doc.font('Helvetica').fillColor(secondaryColor).text('HTML5, CSS3, JavaScript, React, Tailwind CSS');

doc.moveDown(0.2);
doc.font('Helvetica-Bold').text('Database: ', { continued: true });
doc.font('Helvetica').fillColor(secondaryColor).text('SQL');

// --- EXPERIENCE ---
addSectionHeader('Experience');
doc.font('Helvetica-Bold').fontSize(12).fillColor(primaryColor).text('Trainee GIS Analyst | Falcon Info Solutions Pvt. Ltd. | Noida | ', { continued: true });
doc.font('Helvetica').text('Aug 2025 – Present');

doc.font('Helvetica').fontSize(11).fillColor(secondaryColor);
doc.list([
  'Worked on web-based dashboards and interfaces supporting GIS applications.',
  'Utilized Python scripts for data handling, automation, and backend support.',
  'Participated in requirement analysis, testing, and documentation.',
  'Using GIS tools and software for data visualization and reporting.'
], { bulletRadius: 2 });

doc.moveDown(0.5);
doc.font('Helvetica-Bold').fontSize(12).fillColor(primaryColor).text('Intern (Associate Trainer) | Face Prep | Tamil Nadu | ', { continued: true });
doc.font('Helvetica').text('March 2025 – July 2025');

doc.font('Helvetica').fontSize(11).fillColor(secondaryColor);
doc.list([
  'Successfully conducted over 15 training sessions on LinkedIn for college students.',
  'Collaborated closely with lead trainers to organize and deliver interactive workshops.',
  'Proactively addressed and resolved student queries in a timely manner.',
  'Consistently received positive feedback from more than 90 participants.'
], { bulletRadius: 2 });

// --- CERTIFICATIONS ---
addSectionHeader('Certifications & Workshops');
doc.font('Helvetica').fontSize(11).fillColor(secondaryColor);
doc.list([
  '7-Day Bootcamp on Web Development, Machine Learning, Python',
  'Hacker Rank - CSS',
  'Hacker Rank - Python',
  'Hacker Rank - JavaScript'
], { bulletRadius: 2 });

// Finalize PDF
doc.end();
