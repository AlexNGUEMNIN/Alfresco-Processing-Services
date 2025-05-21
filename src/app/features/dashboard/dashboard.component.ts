import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../theme/shared/components/card/card.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent, NgApexchartsModule],
  template: `
    <div class="row">
      <!-- Process Status Cards -->
      <div class="col-md-4">
        <app-card [showHeader]="false" blockClass="bg-light-primary">
          <div class="d-flex align-items-center">
            <div>
              <h3 class="mb-1">{{ activeProcesses }}</h3>
              <h6 class="text-primary mb-0">Processus Actifs</h6>
            </div>
            <div class="ms-auto">
              <i class="text-primary f-36" antIcon type="play-circle" theme="outline"></i>
            </div>
          </div>
        </app-card>
      </div>
      
      <div class="col-md-4">
        <app-card [showHeader]="false" blockClass="bg-light-danger">
          <div class="d-flex align-items-center">
            <div>
              <h3 class="mb-1">{{ abandonedProcesses }}</h3>
              <h6 class="text-danger mb-0">Processus Abandonnés</h6>
            </div>
            <div class="ms-auto">
              <i class="text-danger f-36" antIcon type="warning" theme="outline"></i>
            </div>
          </div>
        </app-card>
      </div>

      <div class="col-md-4">
        <app-card [showHeader]="false" blockClass="bg-light-success">
          <div class="d-flex align-items-center">
            <div>
              <h3 class="mb-1">{{ completedProcesses }}</h3>
              <h6 class="text-success mb-0">Processus Terminés</h6>
            </div>
            <div class="ms-auto">
              <i class="text-success f-36" antIcon type="check-circle" theme="outline"></i>
            </div>
          </div>
        </app-card>
      </div>

      <!-- Process Evolution Chart -->
      <div class="col-md-8">
        <app-card cardTitle="Evolution des Processus">
          <div id="process-evolution-chart">
            <apx-chart
              [series]="chartOptions.series"
              [chart]="chartOptions.chart"
              [xaxis]="chartOptions.xaxis"
              [stroke]="chartOptions.stroke"
              [colors]="chartOptions.colors"
              [dataLabels]="chartOptions.dataLabels"
              [legend]="chartOptions.legend"
              [markers]="chartOptions.markers"
              [grid]="chartOptions.grid"
              [yaxis]="chartOptions.yaxis"
              [title]="chartOptions.title"
            ></apx-chart>
          </div>
        </app-card>
      </div>

      <!-- Database Growth -->
      <div class="col-md-4">
        <app-card cardTitle="Croissance Base de Données">
          <div id="db-growth-chart">
            <apx-chart
              [series]="dbChartOptions.series"
              [chart]="dbChartOptions.chart"
              [labels]="dbChartOptions.labels"
              [colors]="dbChartOptions.colors"
              [legend]="dbChartOptions.legend"
            ></apx-chart>
          </div>
        </app-card>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  // Process counters
  activeProcesses = 45;
  abandonedProcesses = 12;
  completedProcesses = 156;

  // Chart configurations
  chartOptions = {
    series: [
      {
        name: 'Processus Actifs',
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: 'Processus Abandonnés',
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    colors: ['#1890ff', '#ff4d4f'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    grid: {
      strokeDashArray: 4
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
      title: {
        text: 'Nombre de Processus'
      }
    },
    legend: {
      position: 'top'
    },
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColors: ['#1890ff', '#ff4d4f'],
      strokeWidth: 2
    }
  };

  dbChartOptions = {
    series: [44, 55, 13],
    chart: {
      type: 'donut',
      height: 350
    },
    labels: ['ACT_RU_VARIABLE', 'ACT_HI_VARINST', 'Autres Tables'],
    colors: ['#1890ff', '#52c41a', '#faad14'],
    legend: {
      position: 'bottom'
    }
  };

  ngOnInit() {
    // Here we would typically fetch real data from a service
  }
}