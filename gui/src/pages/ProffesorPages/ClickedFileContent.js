const ClickedFileContent = (props) => {
    const { item } = props;
  
    return (
      <>
        <div className="fileName">{item.fileName}</div>
        <div className="file">{item.file}</div>
      </>
    );
  };
  
  export default ClickedFileContent;