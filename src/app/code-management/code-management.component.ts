import { Component } from '@angular/core';
import { CodesService } from '../services/codes.service';
import { ProductService } from '../services/product.service';
import { BatchService } from '../services/batch.service';

@Component({
  selector: 'app-code-management',
  templateUrl: './code-management.component.html',
  styleUrl: './code-management.component.css'
})
export class CodeManagementComponent {

  codes: any[] = [];
  products: any[] = [];
  batches: any[] = [];
  newCode: any = {};
  displayDialog: boolean = false;

  constructor(
    private codeService: CodesService,
    private productService: ProductService,
    private batchService: BatchService
  ) {}

  ngOnInit() {
    this.loadCodes();
    this.loadProducts();
    this.loadBatches();
  }

  loadCodes() {
    this.codeService.getCodes().subscribe((data:any) => {
      this.codes = data;
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data:any) => {
      this.products = data;
    });
  }

  loadBatches() {
    this.batchService.getBatches().subscribe((data:any) => {
      this.batches = data;
    });
  }

  showDialogToAdd() {
    this.newCode = {};
    this.displayDialog = true;
  }

  saveCode() {
    this.codeService.addCode(this.newCode).subscribe(() => {
      this.loadCodes();
      this.displayDialog = false;
    });
  }

}
