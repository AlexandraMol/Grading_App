const SelectedOtherFileContent = (props) => {
  const { item } = props;

  return (
    <>
      <div id="#title-file ">
        <b>Titlul fisierului:</b> {item.fileName}
      </div>
      <br></br>
      <div id="#content">
        <b>Continutul fisierului:</b> <br></br>
        {item.file}
      </div>
    </>
  );
};

export default SelectedOtherFileContent;
