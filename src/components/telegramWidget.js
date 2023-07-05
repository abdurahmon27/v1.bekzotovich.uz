import React from "react";

class TelegramWidget extends React.Component {
  render() {
    return (
      <div className="w-full h-full">
        <script
          async
          src="https://telegram.org/js/telegram-widget.js?22"
          data-telegram-post="abdurahmon_mamadiyorov/4"
          data-width="350px"
          data-color="13B4C6"
          data-dark="1"
          data-dark-color="39C4E8"
        ></script>
      </div>
    );
  }
}
export default TelegramWidget;
