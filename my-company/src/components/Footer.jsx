function Footer() {
    return (
      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          padding: "10px",
          marginTop: "30px",
        }}
      >
        © {new Date().getFullYear()} My Company. All rights reserved.
      </footer>
    );
  }
  
  export default Footer;
  