import { fireEvent, render, screen } from '@testing-library/react';

import Home from '../pages/index';

describe('Home', () => {
  it('should add a new card when tweet button is clicked', () => {
    render(<Home />);
    const tweetButton = screen.getByText('Tweet');
    fireEvent.click(tweetButton);
    const cards = screen.getAllByLabelText('message-card');

    expect(cards.length).toEqual(4);
  })

  it('should delete the target card when delete button is clicked', () => {
    let card;
    let cards;

    render(<Home />);
    card = screen.getAllByLabelText('message-card-output')[0];
    cards = screen.getAllByLabelText('message-card');

    expect(cards.length).toEqual(3);
    expect(card.textContent).toEqual('TreasureDAO rocks!!!!'); 

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);
    cards = screen.getAllByLabelText('message-card');

    expect(card.textContent).toEqual('Made by CryptoMan');
    expect(cards.length).toEqual(2);
  })
})
