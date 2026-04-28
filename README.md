# Digital Acknowledgement Form

A web-based digital form that allows patients or next of kin to complete, sign, and download a ** Acknowledgement Form** as a professionally formatted PDF.

---

## Overview

This project replicates a real-world medical form and converts it into a **fully interactive web application**.

Users can:

* Fill in patient and service details
* Capture digital signatures
* Validate required fields
* Generate and download a structured PDF document

---

## Features

### Form Capture

* Patient details (name, ID, contact info)
* Medical scheme information
* Service acknowledgement inputs
* Next of kin support

### Digital Signatures

* Two signature pads:

  * Patient / Next of Kin
  * Disclaimer agreement
* Works with mouse, touch, or stylus

### Validation System

* Required field enforcement
* Signature validation
* User-friendly error messaging

### Progress Tracking

* Dynamic progress bar based on completed fields

### PDF Generation

* Generates a **downloadable A4 PDF**
* Includes:

  * Structured layout
  * Styled headers and sections
  * Captured form data
  * Embedded signature images

### UX Enhancements

* Toast notifications
* Reset confirmation
* Auto-fill for repeated fields

---

## Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling and layout
* **JavaScript (Vanilla)** – Logic and interactivity

### Libraries

* [`pdf-lib`](https://github.com/Hopding/pdf-lib) – PDF generation
* [`signature_pad`](https://github.com/szimek/signature_pad) – Signature capture

---

## Project Structure

```
/project-folder
│── index.html     # Main application file
│── README.md      # Project documentation
```

---

## How It Works

1. User fills in the form fields
2. Signs using the signature pads
3. Clicks **"Generate & Download PDF"**
4. JavaScript:

   * Validates inputs
   * Captures signature as image
   * Uses `pdf-lib` to build the document
5. PDF is downloaded automatically



## Future Improvements

* Backend integration (store submissions)
* Email PDF directly to patient/admin
* Authentication system for nurses
* Multi-page PDF support
* Form autosave

---

## Author

Developed by **Me, Mzwandile Matrose and claude.ai**

---

## License

This project is for educational and demonstration purposes.

---
