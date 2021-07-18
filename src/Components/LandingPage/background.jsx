import React, { Component } from 'react';
import Sky from 'react-sky';


class App extends Component {
    render() {
      return (
        <div>
          /* Sky adapts size to its container */
          <Sky
            images={{
              /* FORMAT AS FOLLOWS */
              0: "https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-logo-PNG.png",  /* You can pass as many images as you want */
              1: "https://kernel.sr/wp-content/uploads/2020/06/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art.png",
              2: "https://i.pinimg.com/474x/c8/f4/25/c8f425a8ecd3d70575235846c0f7986b.jpg"/* you can pass images in any form: link, imported via webpack... */
              /* 3: your other image... */
              /* 4: your other image... */
              /* 5: your other image... */
              /* ... */
            }}
            how={130} /* Pass the number of images Sky will render chosing randomly */
            time={40} /* time of animation */
            size={'100px'} /* size of the rendered images */
            background={'palettedvioletred'} /* color of background */
          />
        </div>
      );
    }
  }
  
  export default App;