import React from 'react';
import { Helmet } from 'react-helmet';
import { NoScript } from 'react-noscript';


class UserChatLink extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const scriptDeclaration = document.createElement('script');
    scriptDeclaration.innerHTML = 'function InitialiseC4A() {\n' +
      '      /* Chat Tool */\n' +
      '      var Tool1 = new C4A.Tools(1);\n' +
      '      C4A.Run(\'575167fc-701b-4adb-91b0-b4579ff9dd56\');\n' +
      '    }';
    scriptDeclaration.type = 'text/javascript';
    document.body.appendChild(scriptDeclaration);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://v4in1-si.click4assistance.co.uk/SI.js';
    script.async = true;
    document.body.appendChild(script);
  }


  render() {
    return (
      <Helmet>
        <NoScript><a
          href="//click4assistance.co.uk/add-live-chat-software-click4assistance-uk"
          target="_blank"
          style="font-size:10px;position:fixed;bottom:2px;right:2px;"
        >
          Click4Assistance UK Live Chat
          Software
        </a></NoScript>
      </Helmet>
    );
  }
}

export default UserChatLink;

