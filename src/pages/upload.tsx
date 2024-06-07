import React, {ChangeEvent, useRef, useState} from "react";
import '../App.css';
import logo from '../assets/react.svg';


const Upload : React.FC = () => {
  const [file, setFile] = useState<string>(logo);
  const fileref = useRef<HTMLInputElement | null>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.item(0);
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setFile(reader.result as string);
        }
      };
      reader.readAsDataURL(image);
    }
  }

    return (
        <div>
            <h1>Upload</h1>
            <div className="App">
              <header>
                <img src={file} className="App-logo" alt="logo" style={{width:'200px'}}/>
                <br />
                <input type="file" ref={fileref}
                placeholder="Gambar"
                onChange={handleChange}
                />
              </header>
            </div>
        </div>
    )
}

export default Upload;