import { TestBed, inject } from '@angular/core/testing';
import { BackendService } from './backend.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BarList } from '../models/bar-list.model';

describe('backend service',() => {
    let service: BackendService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BackendService]
        });
        service =TestBed.get(BackendService);
    });
    
    it('should retrieve the balist from the api via GET', () => {
        const dummyBar: BarList[] = [
            ]
        
        service.fetchBarList(0).subscribe(bar => {
            expect(bar.length).toBe(5)
        })
    })
})