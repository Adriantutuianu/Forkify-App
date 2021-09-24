import View from './View.js';
import icons from 'url:../../img/icons.svg'; //parcel 2

class AddRecipeView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
   
    }

    // Page 1, and there are NO other pages
    return '';
  }
}

export default new AddRecipeView();
