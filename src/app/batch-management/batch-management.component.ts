import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { BatchService } from '../services/batch.service';

@Component({
  selector: 'app-batch-management',
  templateUrl: './batch-management.component.html',
  styleUrl: './batch-management.component.css'
})
export class BatchManagementComponent {
  batches: any[] = [];
  products: any[] = [];
  displayDialog: boolean = false;
  newBatch: any = {};
  isNameInvalid:boolean = false;
  isDateInvalid!:boolean
  minDate: Date = new Date();   
  maxDate: Date = new Date();

  constructor(private batchService: BatchService, private productService: ProductService) {
    this.loadBatches();
    this.loadProducts();
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 5);
  }

  loadBatches() {
    this.batchService.getBatches().subscribe(data => {
      this.batches = data;
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  showDialogToAdd() {
    this.newBatch = {}; 
    this.displayDialog = true;
  }

  saveBatch() {
    if (this.isFormValid()) {

    this.batchService.addBatch(this.newBatch).subscribe((data) => {
      this.loadBatches(); 
      this.displayDialog = false;
    });
  }
  }

  isFormValid() {
    this.isDateInvalid = this.newBatch.manufacturingDate > this.newBatch.expiryDate;

    this.isNameInvalid = !this.newBatch.name || this.batches.some(batch => batch.name === this.newBatch.name);
    if (this.isNameInvalid) return false;

    const mfgDate = new Date(this.newBatch.manufacturingDate);
    const expDate = new Date(this.newBatch.expiryDate);

    return mfgDate <= expDate;
  }
  validateDates(){
    if (this.newBatch.expiryDate && this.newBatch.manufacturingDate) {
      this.isDateInvalid = this.newBatch.expiryDate <= this.newBatch.manufacturingDate;
    }
  }
}
