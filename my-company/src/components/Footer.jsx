function Footer() {
  return (
    <footer
        style={{
        backgroundColor: '#f2f2f2',
            textAlign: 'center',
            padding: '15px',
            marginTop: '20px',
        }}
    >

      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;