import { __decorate, __extends } from "tslib";
import { NgbCalendarIslamicCivil } from './ngb-calendar-islamic-civil';
import { NgbDate } from '../ngb-date';
import { Injectable } from '@angular/core';
/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 */
var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
var HIJRI_BEGIN = 1300;
var HIJRI_END = 1600;
var ONE_DAY = 1000 * 60 * 60 * 24;
var MONTH_LENGTH = [
    // 1300-1304
    '101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
    // 1305-1309
    '001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
    // 1310-1314
    '101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
    // 1315-1319
    '011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
    // 1320-1324
    '010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
    // 1325-1329
    '101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
    // 1330-1334
    '110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
    // 1335-1339
    '101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
    // 1340-1344
    '001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
    // 1345-1349
    '101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
    // 1350-1354
    '010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
    // 1355-1359
    '100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
    // 1360-1364
    '011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
    // 1365-1369
    '110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
    // 1370-1374
    '100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
    // 1375-1379
    '101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
    // 1380-1384
    '010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
    // 1385-1389
    '001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
    // 1390-1394
    '010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
    // 1395-1399
    '101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
    // 1400-1404
    '101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
    // 1405-1409
    '101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
    // 1410-1414
    '110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
    // 1415-1419
    '010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
    // 1420-1424
    '010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
    // 1425-1429
    '101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
    // 1430-1434
    '011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
    // 1435-1439
    '101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
    // 1440-1444
    '010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
    // 1445-1449
    '011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
    // 1450-1454
    '101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
    // 1455-1459
    '010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
    // 1460-1464
    '011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
    // 1465-1469
    '101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
    // 1470-1474
    '001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
    // 1475-1479
    '011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
    // 1480-1484
    '101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
    // 1485-1489
    '100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
    // 1490-1494
    '010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
    // 1495-1499
    '011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
    // 1500-1504
    '010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
    // 1505-1509
    '101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
    // 1510-1514
    '101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
    // 1515-1519
    '001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
    // 1520-1524
    '010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
    // 1525-1529
    '110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
    // 1530-1534
    '011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
    // 1535-1539
    '101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
    // 1540-1544
    '011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
    // 1545-1549
    '110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
    // 1550-1554
    '101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
    // 1555-1559
    '001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
    // 1560-1564
    '110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
    // 1565-1569
    '010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
    // 1570-1574
    '010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
    // 1575-1579
    '111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
    // 1580-1584
    '011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
    // 1585-1589
    '010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
    // 1590-1594
    '101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
    // 1595-1599
    '010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
    // 1600
    '001010011101'
];
function getDaysDiff(date1, date2) {
    // Ignores the time part in date1 and date2:
    var time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    var time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    var diff = Math.abs(time1 - time2);
    return Math.round(diff / ONE_DAY);
}
var NgbCalendarIslamicUmalqura = /** @class */ (function (_super) {
    __extends(NgbCalendarIslamicUmalqura, _super);
    function NgbCalendarIslamicUmalqura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
    * `gdate` is s JS Date to be converted to Hijri.
    */
    NgbCalendarIslamicUmalqura.prototype.fromGregorian = function (gDate) {
        var hDay = 1, hMonth = 0, hYear = 1300;
        var daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
        if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
            var year = 1300;
            for (var i = 0; i < MONTH_LENGTH.length; i++, year++) {
                for (var j = 0; j < 12; j++) {
                    var numOfDays = +MONTH_LENGTH[i][j] + 29;
                    if (daysDiff <= numOfDays) {
                        hDay = daysDiff + 1;
                        if (hDay > numOfDays) {
                            hDay = 1;
                            j++;
                        }
                        if (j > 11) {
                            j = 0;
                            year++;
                        }
                        hMonth = j;
                        hYear = year;
                        return new NgbDate(hYear, hMonth + 1, hDay);
                    }
                    daysDiff = daysDiff - numOfDays;
                }
            }
            return null;
        }
        else {
            return _super.prototype.fromGregorian.call(this, gDate);
        }
    };
    /**
    * Converts the current Hijri date to Gregorian.
    */
    NgbCalendarIslamicUmalqura.prototype.toGregorian = function (hDate) {
        var hYear = hDate.year;
        var hMonth = hDate.month - 1;
        var hDay = hDate.day;
        var gDate = new Date(GREGORIAN_FIRST_DATE);
        var dayDiff = hDay - 1;
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            for (var y = 0; y < hYear - HIJRI_BEGIN; y++) {
                for (var m = 0; m < 12; m++) {
                    dayDiff += +MONTH_LENGTH[y][m] + 29;
                }
            }
            for (var m = 0; m < hMonth; m++) {
                dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
            }
            gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
        }
        else {
            gDate = _super.prototype.toGregorian.call(this, hDate);
        }
        return gDate;
    };
    /**
    * Returns the number of days in a specific Hijri hMonth.
    * `hMonth` is 1 for Muharram, 2 for Safar, etc.
    * `hYear` is any Hijri hYear.
    */
    NgbCalendarIslamicUmalqura.prototype.getDaysPerMonth = function (hMonth, hYear) {
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            var pos = hYear - HIJRI_BEGIN;
            return +MONTH_LENGTH[pos][hMonth - 1] + 29;
        }
        return _super.prototype.getDaysPerMonth.call(this, hMonth, hYear);
    };
    NgbCalendarIslamicUmalqura = __decorate([
        Injectable()
    ], NgbCalendarIslamicUmalqura);
    return NgbCalendarIslamicUmalqura;
}(NgbCalendarIslamicCivil));
export { NgbCalendarIslamicUmalqura };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLWlzbGFtaWMtdW1hbHF1cmEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIvaGlqcmkvbmdiLWNhbGVuZGFyLWlzbGFtaWMtdW1hbHF1cmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6Qzs7Ozs7R0FLRztBQUVILElBQU0sb0JBQW9CLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNwRCxJQUFNLG1CQUFtQixHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQztBQUN2QixJQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFFcEMsSUFBTSxZQUFZLEdBQUc7SUFDbkIsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsT0FBTztJQUNQLGNBQWM7Q0FDZixDQUFDO0FBRUYsU0FBUyxXQUFXLENBQUMsS0FBVyxFQUFFLEtBQVc7SUFDM0MsNENBQTRDO0lBQzVDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMvRSxJQUFNLEtBQUssR0FB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QUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDM0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDckM7YUFDRjtZQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3ZEO1lBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsS0FBSyxHQUFHLGlCQUFNLFdBQVcsWUFBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNEOzs7O01BSUU7SUFDRixvREFBZSxHQUFmLFVBQWdCLE1BQWMsRUFBRSxLQUFhO1FBQzNDLElBQUksS0FBSyxJQUFJLFdBQVcsSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQzlDLElBQU0sR0FBRyxHQUFHLEtBQUssR0FBRyxXQUFXLENBQUM7WUFDaEMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxpQkFBTSxlQUFlLFlBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUF0RVUsMEJBQTBCO1FBRHRDLFVBQVUsRUFBRTtPQUNBLDBCQUEwQixDQXVFdEM7SUFBRCxpQ0FBQztDQUFBLEFBdkVELENBQWdELHVCQUF1QixHQXVFdEU7U0F2RVksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ2JDYWxlbmRhcklzbGFtaWNDaXZpbH0gZnJvbSAnLi9uZ2ItY2FsZW5kYXItaXNsYW1pYy1jaXZpbCc7XG5pbXBvcnQge05nYkRhdGV9IGZyb20gJy4uL25nYi1kYXRlJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVW1hbHF1cmEgY2FsZW5kYXIgaXMgb25lIHR5cGUgb2YgSGlqcmkgY2FsZW5kYXJzIHVzZWQgaW4gaXNsYW1pYyBjb3VudHJpZXMuXG4gKiBUaGlzIENhbGVuZGFyIGlzIHVzZWQgYnkgU2F1ZGkgQXJhYmlhIGZvciBhZG1pbmlzdHJhdGl2ZSBwdXJwb3NlLlxuICogVW5saWtlIHRhYnVsYXIgY2FsZW5kYXJzLCB0aGUgYWxnb3JpdGhtIGludm9sdmVzIGFzdHJvbm9taWNhbCBjYWxjdWxhdGlvbiwgYnV0IGl0J3Mgc3RpbGwgZGV0ZXJtaW5pc3RpYy5cbiAqIGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL2RldmVsb3BtZW50L2RldmVsb3BtZW50LXByb2Nlc3MvZGVzaWduLXByb3Bvc2Fscy9pc2xhbWljLWNhbGVuZGFyLXR5cGVzXG4gKi9cblxuY29uc3QgR1JFR09SSUFOX0ZJUlNUX0RBVEUgPSBuZXcgRGF0ZSgxODgyLCAxMCwgMTIpO1xuY29uc3QgR1JFR09SSUFOX0xBU1RfREFURSA9IG5ldyBEYXRlKDIxNzQsIDEwLCAyNSk7XG5jb25zdCBISUpSSV9CRUdJTiA9IDEzMDA7XG5jb25zdCBISUpSSV9FTkQgPSAxNjAwO1xuY29uc3QgT05FX0RBWSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XG5cbmNvbnN0IE1PTlRIX0xFTkdUSCA9IFtcbiAgLy8gMTMwMC0xMzA0XG4gICcxMDEwMTAxMDEwMTAnLCAnMTEwMTAxMDEwMTAwJywgJzExMTAxMTAwMTAwMScsICcwMTEwMTEwMTAxMDAnLCAnMDExMDExMTAxMDEwJyxcbiAgLy8gMTMwNS0xMzA5XG4gICcwMDExMDExMDExMDAnLCAnMTAxMDEwMTAxMTAxJywgJzAxMDEwMTAxMDEwMScsICcwMTEwMTAxMDEwMDEnLCAnMDExMTEwMDEwMDEwJyxcbiAgLy8gMTMxMC0xMzE0XG4gICcxMDExMTAxMDEwMDEnLCAnMDEwMTExMDEwMTAwJywgJzEwMTAxMTAxMTAxMCcsICcwMTAxMDEwMTExMDAnLCAnMTEwMTAwMTAxMTAxJyxcbiAgLy8gMTMxNS0xMzE5XG4gICcwMTEwMTAwMTAxMDEnLCAnMDExMTAxMDAxMDEwJywgJzEwMTEwMTAxMDEwMCcsICcxMDExMDExMDEwMTAnLCAnMDEwMTEwMTAxMTAxJyxcbiAgLy8gMTMyMC0xMzI0XG4gICcwMTAwMTAxMDExMTAnLCAnMTAxMDAxMDAxMTExJywgJzAxMDEwMDAxMDExMScsICcwMTEwMTAwMDEwMTEnLCAnMDExMDEwMTAwMTAxJyxcbiAgLy8gMTMyNS0xMzI5XG4gICcxMDEwMTEwMTAxMDEnLCAnMDAxMDExMDEwMTEwJywgJzEwMDEwMTAxMTAxMScsICcwMTAwMTAwMTExMDEnLCAnMTAxMDAxMDAxMTAxJyxcbiAgLy8gMTMzMC0xMzM0XG4gICcxMTAxMDAxMDAxMTAnLCAnMTEwMTEwMDEwMTAxJywgJzAxMDExMDEwMTEwMCcsICcxMDAxMTAxMTAxMTAnLCAnMDAxMDEwMTExMDEwJyxcbiAgLy8gMTMzNS0xMzM5XG4gICcxMDEwMDEwMTEwMTEnLCAnMDEwMTAwMTAxMDExJywgJzEwMTAxMDAxMDEwMScsICcwMTEwMTEwMDEwMTAnLCAnMTAxMDExMTAxMDAxJyxcbiAgLy8gMTM0MC0xMzQ0XG4gICcwMDEwMTExMTAxMDAnLCAnMTAwMTAxMTEwMTEwJywgJzAwMTAxMDExMDExMCcsICcxMDAxMDEwMTAxMTAnLCAnMTAxMDExMDAxMDEwJyxcbiAgLy8gMTM0NS0xMzQ5XG4gICcxMDExMTAxMDAxMDAnLCAnMTAxMTExMDEwMDEwJywgJzAxMDExMTAxMTAwMScsICcwMDEwMTEwMTExMDAnLCAnMTAwMTAxMTAxMTAxJyxcbiAgLy8gMTM1MC0xMzU0XG4gICcwMTAxMDEwMDExMDEnLCAnMTAxMDEwMTAwMTAxJywgJzEwMTEwMTAxMDAxMCcsICcxMDExMTAxMDAxMDEnLCAnMDEwMTEwMTEwMTAwJyxcbiAgLy8gMTM1NS0xMzU5XG4gICcxMDAxMTAxMTAxMTAnLCAnMDEwMTAxMDEwMTExJywgJzAwMTAxMDAxMDExMScsICcwMTAxMDEwMDEwMTEnLCAnMDExMDEwMTAwMDExJyxcbiAgLy8gMTM2MC0xMzY0XG4gICcwMTExMDEwMTAwMTAnLCAnMTAxMTAxMTAwMTAxJywgJzAxMDEwMTEwMTAxMCcsICcxMDEwMTAxMDEwMTEnLCAnMDEwMTAwMTAxMDExJyxcbiAgLy8gMTM2NS0xMzY5XG4gICcxMTAwMTAwMTAxMDEnLCAnMTEwMTAxMDAxMDEwJywgJzExMDExMDEwMDEwMScsICcwMTAxMTEwMDEwMTAnLCAnMTAxMDExMDEwMTEwJyxcbiAgLy8gMTM3MC0xMzc0XG4gICcxMDAxMDEwMTAxMTEnLCAnMDEwMDEwMTAxMDExJywgJzEwMDEwMTAwMTAxMScsICcxMDEwMTAxMDAxMDEnLCAnMTAxMTAxMDEwMDEwJyxcbiAgLy8gMTM3NS0xMzc5XG4gICcxMDExMDExMDEwMTAnLCAnMDEwMTAxMTEwMTAxJywgJzAwMTAwMTExMDExMCcsICcxMDAwMTAxMTAxMTEnLCAnMDEwMDAxMDExMDExJyxcbiAgLy8gMTM4MC0xMzg0XG4gICcwMTAxMDEwMTAxMDEnLCAnMDEwMTEwMTAxMDAxJywgJzAxMDExMDExMDEwMCcsICcxMDAxMTEwMTEwMTAnLCAnMDEwMDExMDExMTAxJyxcbiAgLy8gMTM4NS0xMzg5XG4gICcwMDEwMDExMDExMTAnLCAnMTAwMTAwMTEwMTEwJywgJzEwMTAxMDEwMTAxMCcsICcxMTAxMDEwMTAxMDAnLCAnMTEwMTEwMTEwMDEwJyxcbiAgLy8gMTM5MC0xMzk0XG4gICcwMTAxMTEwMTAxMDEnLCAnMDAxMDExMDExMDEwJywgJzEwMDEwMTAxMTAxMScsICcwMTAwMTAxMDEwMTEnLCAnMTAxMDAxMDEwMTAxJyxcbiAgLy8gMTM5NS0xMzk5XG4gICcxMDExMDEwMDEwMDEnLCAnMTAxMTAxMTAwMTAwJywgJzEwMTEwMTExMDAwMScsICcwMTAxMTAxMTAxMDAnLCAnMTAxMDEwMTEwMTAxJyxcbiAgLy8gMTQwMC0xNDA0XG4gICcxMDEwMDEwMTAxMDEnLCAnMTEwMTAwMTAwMTAxJywgJzExMTAxMDAxMDAxMCcsICcxMTEwMTEwMDEwMDEnLCAnMDExMDExMDEwMTAwJyxcbiAgLy8gMTQwNS0xNDA5XG4gICcxMDEwMTExMDEwMDEnLCAnMTAwMTAxMTAxMDExJywgJzAxMDAxMDEwMTAxMScsICcxMDEwMTAwMTAwMTEnLCAnMTEwMTAxMDAxMDAxJyxcbiAgLy8gMTQxMC0xNDE0XG4gICcxMTAxMTAxMDAxMDAnLCAnMTEwMTEwMTEwMDEwJywgJzEwMTAxMDExMTAwMScsICcwMTAwMTAxMTEwMTAnLCAnMTAxMDAxMDExMDExJyxcbiAgLy8gMTQxNS0xNDE5XG4gICcwMTAxMDAxMDEwMTEnLCAnMTAxMDEwMDEwMTAxJywgJzEwMTEwMDEwMTAxMCcsICcxMDExMDEwMTAxMDEnLCAnMDEwMTAxMDExMTAwJyxcbiAgLy8gMTQyMC0xNDI0XG4gICcwMTAwMTAxMTExMDEnLCAnMDAxMDAwMTExMTAxJywgJzEwMDEwMDAxMTEwMScsICcxMDEwMTAwMTAxMDEnLCAnMTAxMTAxMDAxMDEwJyxcbiAgLy8gMTQyNS0xNDI5XG4gICcxMDExMDEwMTEwMTAnLCAnMDEwMTAxMTAxMTAxJywgJzAwMTAxMDExMDExMCcsICcxMDAxMDAxMTEwMTEnLCAnMDEwMDEwMDExMDExJyxcbiAgLy8gMTQzMC0xNDM0XG4gICcwMTEwMDEwMTAxMDEnLCAnMDExMDEwMTAxMDAxJywgJzAxMTEwMTAxMDEwMCcsICcxMDExMDExMDEwMTAnLCAnMDEwMTAxMTAxMTAwJyxcbiAgLy8gMTQzNS0xNDM5XG4gICcxMDEwMTAxMDExMDEnLCAnMDEwMTAxMDEwMTAxJywgJzEwMTEwMDEwMTAwMScsICcxMDExMTAwMTAwMTAnLCAnMTAxMTEwMTAxMDAxJyxcbiAgLy8gMTQ0MC0xNDQ0XG4gICcwMTAxMTEwMTAxMDAnLCAnMTAxMDExMDExMDEwJywgJzAxMDEwMTAxMTAxMCcsICcxMDEwMTAxMDEwMTEnLCAnMDEwMTEwMDEwMTAxJyxcbiAgLy8gMTQ0NS0xNDQ5XG4gICcwMTExMDEwMDEwMDEnLCAnMDExMTAxMTAwMTAwJywgJzEwMTExMDEwMTAxMCcsICcwMTAxMTAxMTAxMDEnLCAnMDAxMDEwMTEwMTEwJyxcbiAgLy8gMTQ1MC0xNDU0XG4gICcxMDEwMDEwMTAxMTAnLCAnMTExMDAxMDAxMTAxJywgJzEwMTEwMDEwMDEwMScsICcxMDExMDEwMTAwMTAnLCAnMTAxMTAxMTAxMDEwJyxcbiAgLy8gMTQ1NS0xNDU5XG4gICcwMTAxMTAxMDExMDEnLCAnMDAxMDEwMTAxMTEwJywgJzEwMDEwMDEwMTExMScsICcwMTAwMTAwMTAxMTEnLCAnMDExMDAxMDAxMDExJyxcbiAgLy8gMTQ2MC0xNDY0XG4gICcwMTEwMTAxMDAxMDEnLCAnMDExMDEwMTAxMTAwJywgJzEwMTAxMTAxMDExMCcsICcwMTAxMDEwMTExMDEnLCAnMDEwMDEwMDExMTAxJyxcbiAgLy8gMTQ2NS0xNDY5XG4gICcxMDEwMDEwMDExMDEnLCAnMTEwMTAwMDEwMTEwJywgJzExMDExMDAxMDEwMScsICcwMTAxMTAxMDEwMTAnLCAnMDEwMTEwMTEwMTAxJyxcbiAgLy8gMTQ3MC0xNDc0XG4gICcwMDEwMTEwMTEwMTAnLCAnMTAwMTAxMDExMDExJywgJzAxMDAxMDEwMTEwMScsICcwMTAxMTAwMTAxMDEnLCAnMDExMDExMDAxMDEwJyxcbiAgLy8gMTQ3NS0xNDc5XG4gICcwMTEwMTExMDAxMDAnLCAnMTAxMDExMTAxMDEwJywgJzAxMDAxMTExMDEwMScsICcwMDEwMTAxMTAxMTAnLCAnMTAwMTAxMDEwMTEwJyxcbiAgLy8gMTQ4MC0xNDg0XG4gICcxMDEwMTAxMDEwMTAnLCAnMTAxMTAxMDEwMTAwJywgJzEwMTExMTAxMDAxMCcsICcwMTAxMTEwMTEwMDEnLCAnMDAxMDExMTAxMDEwJyxcbiAgLy8gMTQ4NS0xNDg5XG4gICcxMDAxMDExMDExMDEnLCAnMDEwMDEwMTAxMTAxJywgJzEwMTAxMDAxMDEwMScsICcxMDExMDEwMDEwMTAnLCAnMTAxMTEwMTAwMTAxJyxcbiAgLy8gMTQ5MC0xNDk0XG4gICcwMTAxMTAxMTAwMTAnLCAnMTAwMTEwMTEwMTAxJywgJzAxMDAxMTAxMDExMCcsICcxMDEwMTAwMTAxMTEnLCAnMDEwMTAxMDAwMTExJyxcbiAgLy8gMTQ5NS0xNDk5XG4gICcwMTEwMTAwMTAwMTEnLCAnMDExMTAxMDAxMDAxJywgJzEwMTEwMTAxMDEwMScsICcwMTAxMDExMDEwMTAnLCAnMTAxMDAxMTAxMDExJyxcbiAgLy8gMTUwMC0xNTA0XG4gICcwMTAxMDAxMDEwMTEnLCAnMTAxMDEwMDAxMDExJywgJzExMDEwMTAwMDExMCcsICcxMTAxMTAxMDAwMTEnLCAnMDEwMTExMDAxMDEwJyxcbiAgLy8gMTUwNS0xNTA5XG4gICcxMDEwMTEwMTAxMTAnLCAnMDEwMDExMDExMDExJywgJzAwMTAwMTEwMTAxMScsICcxMDAxMDEwMDEwMTEnLCAnMTAxMDEwMTAwMTAxJyxcbiAgLy8gMTUxMC0xNTE0XG4gICcxMDExMDEwMTAwMTAnLCAnMTAxMTAxMTAxMDAxJywgJzAxMDEwMTExMDEwMScsICcwMDAxMDExMTAxMTAnLCAnMTAwMDEwMTEwMTExJyxcbiAgLy8gMTUxNS0xNTE5XG4gICcwMDEwMDEwMTEwMTEnLCAnMDEwMTAwMTAxMDExJywgJzAxMDEwMTEwMDEwMScsICcwMTAxMTAxMTAxMDAnLCAnMTAwMTExMDExMDEwJyxcbiAgLy8gMTUyMC0xNTI0XG4gICcwMTAwMTExMDExMDEnLCAnMDAwMTAxMTAxMTAxJywgJzEwMDAxMDExMDExMCcsICcxMDEwMTAxMDAxMTAnLCAnMTEwMTAxMDEwMDEwJyxcbiAgLy8gMTUyNS0xNTI5XG4gICcxMTAxMTAxMDEwMDEnLCAnMDEwMTExMDEwMTAwJywgJzEwMTAxMTAxMTAxMCcsICcxMDAxMDEwMTEwMTEnLCAnMDEwMDEwMTAxMDExJyxcbiAgLy8gMTUzMC0xNTM0XG4gICcwMTEwMDEwMTAwMTEnLCAnMDExMTAwMTAxMDAxJywgJzAxMTEwMTEwMDAxMCcsICcxMDExMTAxMDEwMDEnLCAnMDEwMTEwMTEwMDEwJyxcbiAgLy8gMTUzNS0xNTM5XG4gICcxMDEwMTAxMTAxMDEnLCAnMDEwMTAxMDEwMTAxJywgJzEwMTEwMDEwMDEwMScsICcxMTAxMTAwMTAwMTAnLCAnMTExMDExMDAxMDAxJyxcbiAgLy8gMTU0MC0xNTQ0XG4gICcwMTEwMTEwMTAwMTAnLCAnMTAxMDExMTAxMDAxJywgJzAxMDEwMTEwMTAxMScsICcwMTAwMTAxMDEwMTEnLCAnMTAxMDAxMDEwMTAxJyxcbiAgLy8gMTU0NS0xNTQ5XG4gICcxMTAxMDAxMDEwMDEnLCAnMTEwMTAxMDEwMTAwJywgJzExMDExMDEwMTAxMCcsICcxMDAxMTAxMTAxMDEnLCAnMDEwMDEwMTExMDEwJyxcbiAgLy8gMTU1MC0xNTU0XG4gICcxMDEwMDAxMTEwMTEnLCAnMDEwMDEwMDExMDExJywgJzEwMTAwMTAwMTEwMScsICcxMDEwMTAxMDEwMTAnLCAnMTAxMDExMDEwMTAxJyxcbiAgLy8gMTU1NS0xNTU5XG4gICcwMDEwMTEwMTEwMTAnLCAnMTAwMTAxMDExMTAxJywgJzAxMDAwMTAxMTExMCcsICcxMDEwMDAxMDExMTAnLCAnMTEwMDEwMDExMDEwJyxcbiAgLy8gMTU2MC0xNTY0XG4gICcxMTAxMDEwMTAxMDEnLCAnMDExMDEwMTEwMDEwJywgJzAxMTAxMDExMTAwMScsICcwMTAwMTAxMTEwMTAnLCAnMTAxMDAxMDExMTAxJyxcbiAgLy8gMTU2NS0xNTY5XG4gICcwMTAxMDAxMDExMDEnLCAnMTAxMDEwMDEwMTAxJywgJzEwMTEwMTAxMDAxMCcsICcxMDExMTAxMDEwMDAnLCAnMTAxMTEwMTEwMTAwJyxcbiAgLy8gMTU3MC0xNTc0XG4gICcwMTAxMTAxMTEwMDEnLCAnMDAxMDExMDExMDEwJywgJzEwMDEwMTAxMTAxMCcsICcxMDExMDEwMDEwMTAnLCAnMTEwMTEwMTAwMTAwJyxcbiAgLy8gMTU3NS0xNTc5XG4gICcxMTEwMTEwMTAwMDEnLCAnMDExMDExMTAxMDAwJywgJzEwMTEwMTEwMTAxMCcsICcwMTAxMDExMDExMDEnLCAnMDEwMTAwMTEwMTAxJyxcbiAgLy8gMTU4MC0xNTg0XG4gICcwMTEwMTAwMTAxMDEnLCAnMTEwMTAxMDAxMDEwJywgJzExMDExMDEwMTAwMCcsICcxMTAxMTEwMTAxMDAnLCAnMDExMDExMDExMDEwJyxcbiAgLy8gMTU4NS0xNTg5XG4gICcwMTAxMDEwMTEwMTEnLCAnMDAxMDEwMDExMTAxJywgJzAxMTAwMDEwMTAxMScsICcxMDExMDAwMTAxMDEnLCAnMTAxMTAxMDAxMDEwJyxcbiAgLy8gMTU5MC0xNTk0XG4gICcxMDExMTAwMTAxMDEnLCAnMDEwMTEwMTAxMDEwJywgJzEwMTAxMDEwMTExMCcsICcxMDAxMDAxMDExMTAnLCAnMTEwMDEwMDAxMTExJyxcbiAgLy8gMTU5NS0xNTk5XG4gICcwMTAxMDAxMDAxMTEnLCAnMDExMDEwMDEwMTAxJywgJzAxMTAxMDEwMTAxMCcsICcxMDEwMTEwMTAxMTAnLCAnMDEwMTAxMDExMTAxJyxcbiAgLy8gMTYwMFxuICAnMDAxMDEwMDExMTAxJ1xuXTtcblxuZnVuY3Rpb24gZ2V0RGF5c0RpZmYoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogbnVtYmVyIHtcbiAgLy8gSWdub3JlcyB0aGUgdGltZSBwYXJ0IGluIGRhdGUxIGFuZCBkYXRlMjpcbiAgY29uc3QgdGltZTEgPSBEYXRlLlVUQyhkYXRlMS5nZXRGdWxsWWVhcigpLCBkYXRlMS5nZXRNb250aCgpLCBkYXRlMS5nZXREYXRlKCkpO1xuICBjb25zdCB0aW1lMiA9IERhdGUuVVRDKGRhdGUyLmdldEZ1bGxZZWFyKCksIGRhdGUyLmdldE1vbnRoKCksIGRhdGUyLmdldERhdGUoKSk7XG4gIGNvbnN0IGRpZmYgPSBNYXRoLmFicyh0aW1lMSAtIHRpbWUyKTtcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE9ORV9EQVkpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmdiQ2FsZW5kYXJJc2xhbWljVW1hbHF1cmEgZXh0ZW5kcyBOZ2JDYWxlbmRhcklzbGFtaWNDaXZpbCB7XG4gIC8qKlxuICAqIFJldHVybnMgdGhlIGVxdWl2YWxlbnQgaXNsYW1pYyhVbWFscXVyYSkgZGF0ZSB2YWx1ZSBmb3IgYSBnaXZlIGlucHV0IEdyZWdvcmlhbiBkYXRlLlxuICAqIGBnZGF0ZWAgaXMgcyBKUyBEYXRlIHRvIGJlIGNvbnZlcnRlZCB0byBIaWpyaS5cbiAgKi9cbiAgZnJvbUdyZWdvcmlhbihnRGF0ZTogRGF0ZSk6IE5nYkRhdGUge1xuICAgIGxldCBoRGF5ID0gMSwgaE1vbnRoID0gMCwgaFllYXIgPSAxMzAwO1xuICAgIGxldCBkYXlzRGlmZiA9IGdldERheXNEaWZmKGdEYXRlLCBHUkVHT1JJQU5fRklSU1RfREFURSk7XG4gICAgaWYgKGdEYXRlLmdldFRpbWUoKSAtIEdSRUdPUklBTl9GSVJTVF9EQVRFLmdldFRpbWUoKSA+PSAwICYmIGdEYXRlLmdldFRpbWUoKSAtIEdSRUdPUklBTl9MQVNUX0RBVEUuZ2V0VGltZSgpIDw9IDApIHtcbiAgICAgIGxldCB5ZWFyID0gMTMwMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTU9OVEhfTEVOR1RILmxlbmd0aDsgaSsrLCB5ZWFyKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMjsgaisrKSB7XG4gICAgICAgICAgbGV0IG51bU9mRGF5cyA9ICtNT05USF9MRU5HVEhbaV1bal0gKyAyOTtcbiAgICAgICAgICBpZiAoZGF5c0RpZmYgPD0gbnVtT2ZEYXlzKSB7XG4gICAgICAgICAgICBoRGF5ID0gZGF5c0RpZmYgKyAxO1xuICAgICAgICAgICAgaWYgKGhEYXkgPiBudW1PZkRheXMpIHtcbiAgICAgICAgICAgICAgaERheSA9IDE7XG4gICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChqID4gMTEpIHtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHllYXIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhNb250aCA9IGo7XG4gICAgICAgICAgICBoWWVhciA9IHllYXI7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5nYkRhdGUoaFllYXIsIGhNb250aCArIDEsIGhEYXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkYXlzRGlmZiA9IGRheXNEaWZmIC0gbnVtT2ZEYXlzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbCBhcyBhbnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlci5mcm9tR3JlZ29yaWFuKGdEYXRlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICogQ29udmVydHMgdGhlIGN1cnJlbnQgSGlqcmkgZGF0ZSB0byBHcmVnb3JpYW4uXG4gICovXG4gIHRvR3JlZ29yaWFuKGhEYXRlOiBOZ2JEYXRlKTogRGF0ZSB7XG4gICAgY29uc3QgaFllYXIgPSBoRGF0ZS55ZWFyO1xuICAgIGNvbnN0IGhNb250aCA9IGhEYXRlLm1vbnRoIC0gMTtcbiAgICBjb25zdCBoRGF5ID0gaERhdGUuZGF5O1xuICAgIGxldCBnRGF0ZSA9IG5ldyBEYXRlKEdSRUdPUklBTl9GSVJTVF9EQVRFKTtcbiAgICBsZXQgZGF5RGlmZiA9IGhEYXkgLSAxO1xuICAgIGlmIChoWWVhciA+PSBISUpSSV9CRUdJTiAmJiBoWWVhciA8PSBISUpSSV9FTkQpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaFllYXIgLSBISUpSSV9CRUdJTjsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgMTI7IG0rKykge1xuICAgICAgICAgIGRheURpZmYgKz0gK01PTlRIX0xFTkdUSFt5XVttXSArIDI5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IGhNb250aDsgbSsrKSB7XG4gICAgICAgIGRheURpZmYgKz0gK01PTlRIX0xFTkdUSFtoWWVhciAtIEhJSlJJX0JFR0lOXVttXSArIDI5O1xuICAgICAgfVxuICAgICAgZ0RhdGUuc2V0RGF0ZShHUkVHT1JJQU5fRklSU1RfREFURS5nZXREYXRlKCkgKyBkYXlEaWZmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ0RhdGUgPSBzdXBlci50b0dyZWdvcmlhbihoRGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBnRGF0ZTtcbiAgfVxuICAvKipcbiAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIHNwZWNpZmljIEhpanJpIGhNb250aC5cbiAgKiBgaE1vbnRoYCBpcyAxIGZvciBNdWhhcnJhbSwgMiBmb3IgU2FmYXIsIGV0Yy5cbiAgKiBgaFllYXJgIGlzIGFueSBIaWpyaSBoWWVhci5cbiAgKi9cbiAgZ2V0RGF5c1Blck1vbnRoKGhNb250aDogbnVtYmVyLCBoWWVhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoaFllYXIgPj0gSElKUklfQkVHSU4gJiYgaFllYXIgPD0gSElKUklfRU5EKSB7XG4gICAgICBjb25zdCBwb3MgPSBoWWVhciAtIEhJSlJJX0JFR0lOO1xuICAgICAgcmV0dXJuICtNT05USF9MRU5HVEhbcG9zXVtoTW9udGggLSAxXSArIDI5O1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuZ2V0RGF5c1Blck1vbnRoKGhNb250aCwgaFllYXIpO1xuICB9XG59XG4iXX0=