
import {  Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';


@Injectable()
export class MatPaginationService extends MatPaginatorIntl {

  override firstPageLabel = `Primera pagina`;
  override itemsPerPageLabel = `Items por pagina:`;
  override lastPageLabel = `Ultima pagina`;

  override nextPageLabel = 'Pagina siguiente';
  override previousPageLabel = 'Pagina anterior';

}
