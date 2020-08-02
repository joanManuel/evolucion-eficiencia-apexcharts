import { Component, OnInit, Input, ViewEncapsulation, ViewChild, OnChanges } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexLegend,
  ApexResponsive
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  colors: string[];
  legend: ApexLegend;
  ApexResponsive:ApexResponsive;
};
@Component({
  selector: 'app-modal-datos-del-personal',
  templateUrl: './modal-datos-del-personal.component.html',
  styleUrls: ['./modal-datos-del-personal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalDatosDelPersonalComponent implements OnInit, OnChanges {

  @ViewChild("chart",{static: false}) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  //Datos lista
  datosLista: any = [];

  //Para los gráficos
  datosEficiencia:any = [];
  datosHora:any = [];
  datosColores:any = [];

  @Input() activarModal: boolean = false;
  @Input() datosDelTrabajador: any;
  constructor() { }

  ngOnInit() {
     this.datos();
    this.grafico();
  }
  ngOnChanges(){
    // console.log(typeof this.datosDelTrabajador);
    
    // this.datosDelTrabajador
    // if(this.datosDelTrabajador.length > 0){
      // this.datos();
    // }
    // console.log(this.datosDelTrabajador);
   
    // console.log(this.datosEficiencia);
    // console.log(this.datosColores);
    // console.log(this.datosDelTrabajador);
    // console.log(this.datosLista);
    
  }
  datos(){
    this.datosDelTrabajador.forEach(element => {
      console.log("asdasdas");
      this.datosLista = element.dataEficiencia
    //  console.log(element.dataEficiencia);
      
    });

    this.datosDelTrabajador.forEach(element => {
      element.dataEficiencia.forEach(e => {
        this.datosEficiencia.push(e.eficiencia);
      });
    });

    this.datosEficiencia.forEach(element => {
      if(element >= 70){
        this.datosColores.push("#26C70D" )
      }
      if(element > 40 && element < 70){
        this.datosColores.push("#F6F90B" )
      }
      if(element <= 40){
        this.datosColores.push("#EE0909" )
      }
    });

    this.datosDelTrabajador.forEach(element => {
      element.dataEficiencia.forEach(e => {
        this.datosHora.push(e.hora);
      });
    });
    
  }

  grafico(){
    this.chartOptions = {
      series: [
        {
          name: "eficiencia",
          data: this.datosEficiencia
        }
      ],
      chart: {
        height: 'auto',
        width: '100%',
        type: "bar"
      },
      colors: this.datosColores,
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: this.datosHora,
        labels: {
          show: true,
          trim: true,
          // rotate: -85,
          style: {
            fontSize: "12px",
          }
        }
      },
      yaxis: {
        show: true,
        max: 100
      },
      
    };
  }
}
