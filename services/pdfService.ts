
import { QuoteFormData, QuoteResult } from '../types';
import { COMPANY_INFO } from '../constants';

export const generateQuotePDF = async (data: QuoteFormData, result: QuoteResult) => {
  const { jsPDF } = (window as any).jspdf;
  const doc = new jsPDF();

  // Header
  doc.setFontSize(22);
  doc.setTextColor(196, 30, 58); // #C41E3A
  doc.text(COMPANY_INFO.name.toUpperCase(), 20, 30);
  
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(COMPANY_INFO.address, 20, 38);
  doc.text(COMPANY_INFO.phone, 20, 43);
  doc.text(COMPANY_INFO.email, 20, 48);

  // Divider
  doc.setDrawColor(196, 30, 58);
  doc.line(20, 55, 190, 55);

  // Quote Info
  doc.setFontSize(16);
  doc.text("SERVICE ESTIMATE", 20, 70);
  
  doc.setFontSize(12);
  doc.text(`Customer: ${data.name}`, 20, 85);
  doc.text(`Address: ${data.address}`, 20, 92);
  doc.text(`Phone: ${data.phone}`, 20, 99);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 85);

  // Line Items
  let yPos = 115;
  doc.setFont(undefined, 'bold');
  doc.text("Service Description", 20, yPos);
  doc.text("Estimated Cost", 150, yPos);
  doc.setFont(undefined, 'normal');
  yPos += 10;
  
  result.items.forEach(item => {
    doc.text(item.name, 20, yPos);
    doc.text(`$${item.cost.toLocaleString()}`, 150, yPos);
    yPos += 8;
  });

  // Total
  doc.setDrawColor(200, 200, 200);
  doc.line(20, yPos + 5, 190, yPos + 5);
  yPos += 15;
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text("TOTAL ESTIMATE:", 20, yPos);
  doc.text(`$${result.total.toLocaleString()}`, 150, yPos);

  // Footer
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  doc.setTextColor(100, 100, 100);
  const footerText = "This is a non-binding estimate based on provided details. Final price subject to site inspection.";
  doc.text(footerText, 20, 250);
  doc.text("Accepted By: __________________________  Date: ______________", 20, 265);

  doc.save(`Ingrams_Quote_${data.name.replace(/\s+/g, '_')}.pdf`);
};
