import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { Test00123TestModule } from '../../../test.module';
import { MockEventManager } from '../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../helpers/mock-active-modal.service';
import { FondDocumentEdocDeleteDialogComponent } from 'app/entities/fond-document-edoc/fond-document-edoc-delete-dialog.component';
import { FondDocumentEdocService } from 'app/entities/fond-document-edoc/fond-document-edoc.service';

describe('Component Tests', () => {
  describe('FondDocumentEdoc Management Delete Component', () => {
    let comp: FondDocumentEdocDeleteDialogComponent;
    let fixture: ComponentFixture<FondDocumentEdocDeleteDialogComponent>;
    let service: FondDocumentEdocService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Test00123TestModule],
        declarations: [FondDocumentEdocDeleteDialogComponent],
      })
        .overrideTemplate(FondDocumentEdocDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(FondDocumentEdocDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(FondDocumentEdocService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));

      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.cancel();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});
