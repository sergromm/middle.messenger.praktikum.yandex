import Block from "../../utils/constructor/Block";

export default class EditAvatarPopup extends Block {
  static componentName = "EditAvatarPopup";

  protected getStateFromProps(): void {}

  render() {
    return /* template */ `
      <div class="popup edit-avatar-popup">
        <form class="form edit-avatar-form">
          {{{Button 
            className="popup-close" 
            text="×" 
            type="button"
            name="edit-avatar"
            onClick=handlePopup
          }}}
          <fieldset class="form-container">
            <legend class="form-title">Изменить аватар</legend>
            <label class="input-title">
              <input type="file" class="file-input" name="avatar"/>
              {{{Button 
                className="form-button" 
                text="Сохранить"
              }}}
            </label>
          </fieldset>
        </form>
      </div>`;
  }
}
