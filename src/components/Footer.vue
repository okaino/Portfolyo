<template>
    <footer class="footer">
      <div class="footer-section">
        <h4>About Us</h4>
        <p>Learn more about our company, mission, and values.</p>
      </div>
      <div class="footer-section">
        <h4>Contact</h4>
        <p>Email us at info@example.com</p>
      </div>
      <div class="footer-section">
        <h4>Follow Us</h4>
        <p>Follow us on social media for updates.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  }
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    background-color: rgb(3, 7, 18);
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  .footer-section h4 {
    margin: 0 0 10px 0;
  }
  
  .footer-section p {
    margin: 0;
  }
  
  @media (max-width: 600px) {
    .footer {
      flex-direction: column;
      align-items: center;
    }
  
    .footer-section {
      margin-bottom: 20px;
    }
  
    .footer-section:last-child {
      margin-bottom: 0;
    }
  }
  </style>
  