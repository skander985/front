import React from 'react';


function LearnMoreSection() {
  return (
    <div className="mt-12 p-6 bg-gray-800 rounded-md flex-1">
      <h2 className="text-2xl font-bold">Learn More About Our HR Solutions</h2>
      <p className="mt-4">
        Our platform offers a comprehensive suite of HR management tools designed to streamline and enhance your HR processes. Here’s what you can explore:
      </p>
      <ul className="mt-4 list-disc list-inside space-y-2">
        <li><strong>Recruitment Management:</strong> Simplify your hiring process with our intuitive applicant tracking system. Post job openings, review applications, and manage candidates all in one place.</li>
        <li><strong>Employee Onboarding:</strong> Accelerate the onboarding process with automated workflows, electronic forms, and digital welcome kits to ensure a smooth start for new hires.</li>
        <li><strong>Performance Tracking:</strong> Monitor and evaluate employee performance with customizable performance reviews, goal tracking, and feedback tools to drive continuous improvement.</li>
        <li><strong>Attendance and Leave Management:</strong> Efficiently manage employee attendance and leave requests with our integrated calendar and tracking system, ensuring accurate records and compliance.</li>
        <li><strong>Employee Self-Service:</strong> Empower employees with self-service access to their personal information, pay stubs, benefits, and more, reducing administrative workload and increasing engagement.</li>
        <li><strong>Analytics and Reporting:</strong> Gain valuable insights with our advanced reporting tools. Track key HR metrics, generate detailed reports, and make data-driven decisions to improve organizational effectiveness.</li>
      </ul>
      <p className="mt-4">
        Discover how our HR solutions can transform your organization's HR practices, enhance employee experience, and drive business success. Our dedicated support team is always here to help you get the most out of our platform.
      </p>
    </div>
    
  );
}

export default LearnMoreSection;


