import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatRoomPage } from './chat-room.page';

describe('ChatRoomPage', () => {
  let component: ChatRoomPage;
  let fixture: ComponentFixture<ChatRoomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
