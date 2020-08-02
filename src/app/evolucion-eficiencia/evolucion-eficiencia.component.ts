import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-evolucion-eficiencia',
  templateUrl: './evolucion-eficiencia.component.html',
  styleUrls: ['./evolucion-eficiencia.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EvolucionEficienciaComponent implements OnInit {
  @ViewChild("chart",{static: false}) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  datos:any = {};
  data:any;

  //Para los gráficos
  datosEficiencia:any = [];
  datosNombres:any = [];
  datosColores:any = [];

  //Para ver los datos del trabajador
  seleccionado:number;
  verDatosTrabajador:boolean = false;
  datosDelTrabajadorPadre: any;

  constructor() {
    
  }
  ngOnInit(){
    // debugger
    this.dataFicticia();
    console.log(this.data);
    
    this.grafico();
  }

  dataFicticia(){
    this.data = [{
      nombreOperario:"Maria",
      apellidoOperario:"Lopez",
      eficiencia: 90,
      dataEficiencia:[
        {
        eficiencia: 82,
        hora: "8:00 am"
        },
        {
        eficiencia: 80,
        hora: "9:00 am"
        },
        {
        eficiencia: 70,
        hora: "10:00 am"
        },
        {
        eficiencia: 88,
        hora: "11:00 am"
        },
        {
        eficiencia: 47,
        hora: "11:45 am"
        },
        {
        eficiencia: 62,
        hora: "1:30 pm"
        },
        {
        eficiencia: 60,
        hora: "2:30 pm"
        },
        {
        eficiencia: 80,
        hora: "3:45 pm"
        },
        {
        eficiencia: 33,
        hora: "4:45 pm"
        },
        {
        eficiencia: 13,
        hora: "6:00 pm"
        },
    ]}
      ,{
        nombreOperario:"Juan",
        apellidoOperario:"Perez",
        eficiencia: 89,
        dataEficiencia:[
          {
          eficiencia: 72,
          hora: "8:00 am"
          },
          {
          eficiencia: 30,
          hora: "9:00 am"
          },
          {
          eficiencia: 80,
          hora: "10:00 am"
          },
          {
          eficiencia: 59,
          hora: "11:00 am"
          },
          {
          eficiencia: 77,
          hora: "11:45 am"
          },
          {
          eficiencia: 62,
          hora: "1:30 pm"
          },
          {
          eficiencia: 80,
          hora: "2:30 pm"
          },
          {
          eficiencia: 40,
          hora: "3:45 pm"
          },
          {
          eficiencia: 67,
          hora: "4:45 pm"
          },
          {
          eficiencia: 73,
          hora: "6:00 pm"
          },
      ]}
      ,{
        nombreOperario:"Rodrigo",
        apellidoOperario: "Casas",
        eficiencia: 70,
        dataEficiencia:[
          {
          eficiencia: 72,
          hora: "8:00 am"
          },
          {
          eficiencia: 30,
          hora: "9:00 am"
          },
          {
          eficiencia: 80,
          hora: "10:00 am"
          },
          {
          eficiencia: 59,
          hora: "11:00 am"
          },
          {
          eficiencia: 77,
          hora: "11:45 am"
          }
      ]}
      ,{
        nombreOperario:"Mario",
        apellidoOperario:"Rodriguez",
        eficiencia: 50,
        dataEficiencia:[
          {
          eficiencia: 77,
          hora: "11:45 am"
          },
          {
          eficiencia: 62,
          hora: "1:30 pm"
          },
          {
          eficiencia: 80,
          hora: "2:30 pm"
          },
          {
          eficiencia: 40,
          hora: "3:45 pm"
          },
          {
          eficiencia: 67,
          hora: "4:45 pm"
          },
          {
          eficiencia: 73,
          hora: "6:00 pm"
          },
      ]}
      ,{
        nombreOperario:"Janet",
        apellidoOperario:"Tolentino",
        eficiencia: 43,
        dataEficiencia:[
          {
          eficiencia: 30,
          hora: "9:00 am"
          },
          {
          eficiencia: 80,
          hora: "10:00 am"
          },
          {
          eficiencia: 59,
          hora: "11:00 am"
          },
          {
          eficiencia: 77,
          hora: "11:45 am"
          },
          
      ]}
      ,{
        nombreOperario:"Tania",
        apellidoOperario:"Canelo",
        eficiencia: 22,
        dataEficiencia:[
          {
          eficiencia: 52,
          hora: "8:00 am"
          },
          {
          eficiencia: 40,
          hora: "9:00 am"
          },
          {
          eficiencia: 58,
          hora: "10:00 am"
          },
          {
          eficiencia: 78,
          hora: "11:00 am"
          },
          {
          eficiencia: 90,
          hora: "1:30 pm"
          },
          {
          eficiencia: 70,
          hora: "2:30 pm"
          },
          {
          eficiencia: 40,
          hora: "3:45 pm"
          }
      ]}
      ,{
        nombreOperario:"Andrea",
        apellidoOperario:"Herrera",
        eficiencia: 15,
        dataEficiencia:[
          {
          eficiencia: 62,
          hora: "8:00 am"
          },
          {
          eficiencia: 60,
          hora: "9:00 am"
          },
          {
          eficiencia: 75,
          hora: "10:00 am"
          },
          {
          eficiencia: 68,
          hora: "11:00 am"
          },
          {
          eficiencia: 37,
          hora: "11:45 am"
          },
          {
          eficiencia: 52,
          hora: "1:30 pm"
          },
          {
          eficiencia: 80,
          hora: "2:30 pm"
          },
          {
          eficiencia: 40,
          hora: "3:45 pm"
          },
          {
          eficiencia: 67,
          hora: "4:45 pm"
          },
          {
          eficiencia: 63,
          hora: "6:00 pm"
          },
      ]}
      ,{
        nombreOperario:"Valeria",
        apellidoOperario:"Carrasco",
        eficiencia: 98,
        dataEficiencia:[
          {
          eficiencia: 52,
          hora: "8:00 am"
          },
          {
          eficiencia: 75,
          hora: "9:00 am"
          },
          {
          eficiencia: 22,
          hora: "10:00 am"
          },
          {
          eficiencia: 68,
          hora: "11:00 am"
          },
          {
          eficiencia: 76,
          hora: "11:45 am"
          }
      ]}
      ,{
        nombreOperario:"Alex",
        apellidoOperario:"Santiago",
        eficiencia: 66,
        dataEficiencia:[
          {
          eficiencia: 82,
          hora: "8:00 am"
          },
          {
          eficiencia: 60,
          hora: "9:00 am"
          },
          {
          eficiencia: 86,
          hora: "10:00 am"
          },
          {
          eficiencia: 75,
          hora: "11:00 am"
          },
          
      ]}
      ,{
        nombreOperario:"Andrea",
        apellidoOperario:"Herrera",
        eficiencia: 35,
        dataEficiencia:[
          {
          eficiencia: 78,
          hora: "11:00 am"
          },
          {
          eficiencia: 55,
          hora: "11:45 am"
          },
          {
          eficiencia: 62,
          hora: "1:30 pm"
          },
          {
          eficiencia: 61,
          hora: "2:30 pm"
          },
          {
          eficiencia: 53,
          hora: "3:45 pm"
          },
          {
          eficiencia: 37,
          hora: "4:45 pm"
          },
          {
          eficiencia: 67,
          hora: "6:00 pm"
          },
      ]}
    ]
    
    //ordeno el array de acuerdo a la eficiencia
    this.data = this.data.sort((a, b) => b.eficiencia - a.eficiencia);

    //guardar todos los datos de eficiencia en [datosEficiencia]
    this.data.forEach(element => {
      this.datosEficiencia.push(element.eficiencia);
    });
    console.log( this.data.length)
    
   
    //guardar los nombresYapellidos en [datosNombres]
    this.data.forEach(element => {
      //Guardo nombre y apellido
      let nombresYapellidos = [element.nombreOperario,element.apellidoOperario]
      this.datosNombres.push(nombresYapellidos);
    });

    //Guardo los colores de acuerdo al % de eficiencia
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

  }

  seleccion(indexSeleccionado:number){
    this.verDatosTrabajador = true;
    this.datosDelTrabajadorPadre = [this.data[indexSeleccionado]];
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
        height: 350,
        type: "bar",
        events: {
          dataPointSelection: (e, chart, opts) => {
            this.seleccion(opts.dataPointIndex);
          }
        }
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
        categories: this.datosNombres,
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
        show: false
      },
      
    };
  }
  

}
