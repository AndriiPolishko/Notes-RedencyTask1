import { actions } from '../global/delete-archive.js';

import { forName } from '../noteFieldCreation/createName.js';
import { forCreated } from '../noteFieldCreation/createDateOfCreation.js';
import { forCategory } from '../noteFieldCreation/createCategories.js';
import { forContent } from '../noteFieldCreation/createContent.js';
import { forDates } from '../noteFieldCreation/datesFromContent.js';

export function createNote(numberOfRows) {
  const note = document.createElement('tr');
  note.id = numberOfRows.n;
  numberOfRows.n++;
  note.className = 'note';

  const fields = [
    forName(),
    forCreated(),
    forCategory(),
    forContent(),
    forDates(),
    actions.cloneNode(true),
  ];

  for (let field of fields) {
    note.appendChild(field);
  }

  return note;
}
