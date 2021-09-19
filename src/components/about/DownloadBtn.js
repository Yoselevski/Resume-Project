

const DownloadBtn = () => {
    const downloadFile = () => {
      window.location.href = "https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/Sahar%20Cohen%20-%20CV.pdf?alt=media&token=7bbf2b34-13a9-4484-828c-8e6a0f778f1e"
    }
    return (
              <button onClick={downloadFile} />
    )
  }
  export default DownloadBtn;