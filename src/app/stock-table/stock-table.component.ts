import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrl: './stock-table.component.css'
})
export class StockTableComponent {
  tableData = [
    { symbol: 'NASDAQ:INTC', name: 'Intel Corp.', sector: 'Technology', mktCap: '151B', score: '1.0', conf: 'HIGH', ID: '100', HQ: 'Santa Clara', description: 'Produces microprocessors' },
    { symbol: 'NASDAQ:AMD', name: 'Advanced Micro Devices', sector: 'Technology', mktCap: '173B', score: '1.0', conf: 'HIGH', ID: '200', HQ: 'Across from Intel', description: 'Arch enemy of Intel'},
    { symbol: 'NASDAQ:AAPL', name: 'Intel Corp.', sector: 'Technology', mktCap: '2775B', score: '0.8', conf: 'HIGH', ID: '100', HQ: 'Santa Clara', description: 'Produces microprocessors' },
    { symbol: 'NASDAQ:MSFT', name: 'Microsoft Corp.', sector: 'Technology', mktCap: '2431B', score: '0.3', conf: 'MED', ID: '202', HQ: 'Redmond, WA', description: 'A copy cat software company.' },
    
  ];

  showPopup = false;
  selectedCompany: any;

  showCompanyDetails(row: any): void {
    this.selectedCompany = row;
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }

  moveUp(index: number): void {
    if (index > 0) {
      const temp = this.tableData[index];
      this.tableData[index] = this.tableData[index - 1];
      this.tableData[index - 1] = temp;
    }
  }

  moveDown(index: number): void {
    if (index < this.tableData.length - 1) {
      const temp = this.tableData[index];
      this.tableData[index] = this.tableData[index + 1];
      this.tableData[index + 1] = temp;
    }
  }
}
