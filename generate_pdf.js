import fs from 'fs';
import PDFDocument from 'pdfkit';

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('public/Aman_Naeem_Resume.pdf'));

doc.fontSize(25).text('Aman Naeem - Resume Placeholder', 100, 100);
doc.fontSize(14).text('This is a placeholder PDF file.', 100, 150);
doc.text('Please replace this exact file at the path below with your actual PDF resume:', 100, 180);
doc.fillColor('blue').text('d:\\Aman Prrogramming\\portfolio\\public\\Aman_Naeem_Resume.pdf', 100, 200);

doc.end();
