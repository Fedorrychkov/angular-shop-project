import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'dateformat'
})

export class DateformatPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        let format = '';
        switch (args) {
            case 'date':
                format = 'DD.MM.YYYY';
                break;
            case 'full_year':
                format = 'YYYY';
                break;
            case 'short_year':
                format = 'YY';
                break;
            case 'digit_month':
                format = 'MM';
                break;
            case 'full_month':
                format = 'MMMM';
                break;
            case 'short_mohtn':
                format = 'MMM';
                break;
            case 'day':
                format = 'DD';
                break;
            case 'stamp':
                format = 'x';
                break;
            case 'time':
                format = 'HH:mm';
                break;
            default:
                format = 'DD-MM-YYYY HH:mm:ss';
                break;
        }

        return moment(value).format(format);
    }
}
