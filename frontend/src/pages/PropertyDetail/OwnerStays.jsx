import React, { useState } from 'react';
import styled from 'styled-components';
import { BiCalendar, BiCheck, BiInfoCircle } from 'react-icons/bi';

// Styled Components
const OwnerBookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExplanationSection = styled.div`
  background: linear-gradient(to right, #111, #1a1a1a);
  border-radius: 12px;
  padding: 2rem;
  color: #fff;
  margin-bottom: 1rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
`;

const ExplanationTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ExplanationText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const BenefitCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.2s ease;
  border-left: 2px solid rgba(212, 175, 55, 0.5);
  
  &:hover {
    background: rgba(212, 175, 55, 0.08);
    transform: translateY(-2px);
  }
`;

const BenefitTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BenefitText = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`;

const BookingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #111;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.05);
`;

const BookingTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const BookingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const CalendarContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CalendarTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff;
`;

const CalendarNavigation = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const NavButton = styled.button`
  background: rgba(212, 175, 55, 0.15);
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(212, 175, 55, 0.3);
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;

const DayHeader = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  padding: 0.5rem 0;
`;

const DayCell = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isAvailable ? 'rgba(212, 175, 55, 0.15)' : props.isSelected ? 'rgba(212, 175, 55, 0.4)' : props.isToday ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  border-radius: 4px;
  cursor: ${props => props.isAvailable ? 'pointer' : 'default'};
  opacity: ${props => props.isCurrentMonth ? 1 : 0.3};
  color: ${props => props.isAvailable ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
  
  &:hover {
    background: ${props => props.isAvailable ? 'rgba(212, 175, 55, 0.3)' : props.isSelected ? 'rgba(212, 175, 55, 0.6)' : 'transparent'};
  }
`;

const BookingDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BookingFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BookingLabel = styled.label`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const BookingInput = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0.75rem;
  color: #fff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const BookingSelect = styled.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0.75rem;
  color: #fff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const DateRangeDisplay = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const DateBox = styled.div`
  flex: 1;
  text-align: center;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
`;

const DateLabel = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.25rem;
`;

const DateValue = styled.div`
  font-size: 1.1rem;
  color: #fff;
`;

const PaymentSection = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
`;

const PaymentTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid ${props => props.isSelected ? 'rgba(212, 175, 55, 0.7)' : 'transparent'};
  
  &:hover {
    background: rgba(212, 175, 55, 0.08);
  }
`;

const RadioButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${props => props.isSelected && `
    border-color: #d4af37;
    
    &:after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #d4af37;
    }
  `}
`;

const PaymentOptionContent = styled.div`
  flex: 1;
`;

const PaymentOptionTitle = styled.div`
  font-size: 1rem;
  color: #fff;
`;

const PaymentOptionDescription = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.25rem;
`;

const BookingButton = styled.button`
  background: ${props => props.disabled ? 'rgba(255, 255, 255, 0.1)' : 'linear-gradient(to right, #d4af37, #f2d35b)'};
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  color: ${props => props.disabled ? '#fff' : '#000'};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1.5rem;
  
  &:hover {
    background: linear-gradient(to right, #f2d35b, #d4af37);
    transform: translateY(-2px);
  }
`;

const InfoBox = styled.div`
  background: rgba(212, 175, 55, 0.1);
  border-left: 3px solid #d4af37;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 4px 4px 0;
`;

const InfoText = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

const SummarySection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
`;

const SummaryTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
  
  &:last-child {
    border-bottom: none;
  }
`;

const SummaryLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const SummaryValue = styled.div`
  font-size: 0.9rem;
  color: #fff;
  font-weight: ${props => props.isBold ? '600' : '400'};
`;

const TotalRow = styled(SummaryRow)`
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: none;
`;

const TotalLabel = styled(SummaryLabel)`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`;

const TotalValue = styled(SummaryValue)`
  font-size: 1.1rem;
  font-weight: 600;
`;

const TokenImpactSection = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const TokenImpactTitle = styled.h4`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const TokenImpactText = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`;

// Helper function to generate calendar days
const generateCalendarDays = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  // Generate days from previous month to fill the first row
  const prevMonthDays = [];
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevMonthYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0).getDate();
  
  for (let i = 0; i < startingDayOfWeek; i++) {
    prevMonthDays.push({
      date: new Date(prevMonthYear, prevMonth, daysInPrevMonth - startingDayOfWeek + i + 1),
      isCurrentMonth: false,
      isAvailable: false
    });
  }
  
  // Generate days for current month
  const currentMonthDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    // Randomly determine if the day is available (for demo purposes)
    const isAvailable = Math.random() > 0.3;
    
    currentMonthDays.push({
      date,
      isCurrentMonth: true,
      isAvailable,
      isToday: new Date().toDateString() === date.toDateString()
    });
  }
  
  // Generate days for next month to fill the last row
  const nextMonthDays = [];
  const totalDaysShown = prevMonthDays.length + currentMonthDays.length;
  const daysNeededFromNextMonth = 42 - totalDaysShown; // 6 rows of 7 days
  
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;
  
  for (let i = 1; i <= daysNeededFromNextMonth; i++) {
    nextMonthDays.push({
      date: new Date(nextMonthYear, nextMonth, i),
      isCurrentMonth: false,
      isAvailable: false
    });
  }
  
  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
};

const OwnerBooking = ({ property, token }) => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDates, setSelectedDates] = useState([]);
  const [guestCount, setGuestCount] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState('tokens');
  const [tokenPrice] = useState(token.price);
  
  // Calculate the number of tokens needed for the stay
  const daysSelected = selectedDates.length;
  const tokensPerDay = 5; // Example: 5 tokens per day
  const tokensNeeded = daysSelected * tokensPerDay;
  const tokenValue = tokensNeeded * tokenPrice;
  
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };
  
  // Handle date selection
  const handleDateClick = (day) => {
    if (!day.isAvailable || !day.isCurrentMonth) return;
    
    const dateString = day.date.toDateString();
    const isSelected = selectedDates.some(date => date.toDateString() === dateString);
    
    if (isSelected) {
      setSelectedDates(selectedDates.filter(date => date.toDateString() !== dateString));
    } else {
      setSelectedDates([...selectedDates, day.date].sort((a, b) => a - b));
    }
  };
  
  // Navigate to previous month
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  // Navigate to next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  // Generate calendar days
  const calendarDays = generateCalendarDays(currentYear, currentMonth);
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  return (
    <OwnerBookingContainer>
      <ExplanationSection>
        <ExplanationTitle>
          <BiInfoCircle size={24} /> Exclusive Token Holder Booking
        </ExplanationTitle>
        <ExplanationText>
          As a LOAF token holder, you have exclusive rights to reserve this property for private use, gatherings, or stays. 
          From a single day to extended stays, all LOAF properties are available to token holders with special privileges.
        </ExplanationText>
        
        <InfoBox>
          <InfoText>
            <strong>Token Holder Benefit:</strong> When you use tokens as payment, they are removed from circulation, 
            creating a deflationary effect that increases value for all remaining token holders.
          </InfoText>
        </InfoBox>
        
        <BenefitsGrid>
          <BenefitCard>
            <BenefitTitle><BiCheck size={20} /> Flexible Payment Options</BenefitTitle>
            <BenefitText>
              Use tokens from any LOAF property as payment, hold them as collateral, or make platform deposits while keeping your tokens.
            </BenefitText>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitTitle><BiCheck size={20} /> Value Creation</BenefitTitle>
            <BenefitText>
              When tokens are used for stays, they're removed from circulation, increasing scarcity and potentially driving up token value.
            </BenefitText>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitTitle><BiCheck size={20} /> Cross-Property Access</BenefitTitle>
            <BenefitText>
              Your tokens grant you access to the entire portfolio of LOAF properties, not just the ones you've invested in.
            </BenefitText>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitTitle><BiCheck size={20} /> Flexible Stay Duration</BenefitTitle>
            <BenefitText>
              Book anything from a single day for events to extended stays for vacations or remote work.
            </BenefitText>
          </BenefitCard>
        </BenefitsGrid>
      </ExplanationSection>
      
      <BookingSection>
        <BookingTitle>Reserve Your Property</BookingTitle>
        
        <BookingGrid>
          <CalendarContainer>
            <CalendarHeader>
              <CalendarTitle>
                <BiCalendar size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                {monthNames[currentMonth]} {currentYear}
              </CalendarTitle>
              <CalendarNavigation>
                <NavButton onClick={goToPrevMonth}>&lt;</NavButton>
                <NavButton onClick={goToNextMonth}>&gt;</NavButton>
              </CalendarNavigation>
            </CalendarHeader>
            
            <CalendarGrid>
              {dayNames.map(day => (
                <DayHeader key={day}>{day}</DayHeader>
              ))}
              
              {calendarDays.map((day, index) => (
                <DayCell 
                  key={index}
                  isAvailable={day.isAvailable}
                  isCurrentMonth={day.isCurrentMonth}
                  isToday={day.isToday}
                  isSelected={selectedDates.some(date => date.toDateString() === day.date.toDateString())}
                  onClick={() => handleDateClick(day)}
                >
                  {day.date.getDate()}
                </DayCell>
              ))}
            </CalendarGrid>
            
            {selectedDates.length > 0 && (
              <DateRangeDisplay>
                <DateBox>
                  <DateLabel>Arrival</DateLabel>
                  <DateValue>
                    {selectedDates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </DateValue>
                </DateBox>
                
                <span>→</span>
                
                <DateBox>
                  <DateLabel>Departure</DateLabel>
                  <DateValue>
                    {selectedDates[selectedDates.length - 1].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </DateValue>
                </DateBox>
              </DateRangeDisplay>
            )}
          </CalendarContainer>
          
          <BookingDetailsContainer>
            <BookingFormGroup>
              <BookingLabel>Number of Guests</BookingLabel>
              <BookingSelect 
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </BookingSelect>
            </BookingFormGroup>
            
            <PaymentSection>
              <PaymentTitle>Payment Method</PaymentTitle>
              <PaymentOptions>
                <PaymentOption 
                  isSelected={paymentMethod === 'tokens'}
                  onClick={() => setPaymentMethod('tokens')}
                >
                  <RadioButton isSelected={paymentMethod === 'tokens'} />
                  <PaymentOptionContent>
                    <PaymentOptionTitle>Pay with Tokens</PaymentOptionTitle>
                    <PaymentOptionDescription>
                      Use your LOAF tokens as payment. Tokens will be removed from circulation.
                    </PaymentOptionDescription>
                  </PaymentOptionContent>
                </PaymentOption>
                
                <PaymentOption 
                  isSelected={paymentMethod === 'deposit'}
                  onClick={() => setPaymentMethod('deposit')}
                >
                  <RadioButton isSelected={paymentMethod === 'deposit'} />
                  <PaymentOptionContent>
                    <PaymentOptionTitle>Platform Deposit</PaymentOptionTitle>
                    <PaymentOptionDescription>
                      Pay with cash deposit and keep your tokens. No impact on token circulation.
                    </PaymentOptionDescription>
                  </PaymentOptionContent>
                </PaymentOption>
                
                <PaymentOption 
                  isSelected={paymentMethod === 'collateral'}
                  onClick={() => setPaymentMethod('collateral')}
                >
                  <RadioButton isSelected={paymentMethod === 'collateral'} />
                  <PaymentOptionContent>
                    <PaymentOptionTitle>Tokens as Collateral</PaymentOptionTitle>
                    <PaymentOptionDescription>
                      Lock tokens as collateral during your reservation period. Tokens returned after your stay.
                    </PaymentOptionDescription>
                  </PaymentOptionContent>
                </PaymentOption>
              </PaymentOptions>
            </PaymentSection>
            
            <SummarySection>
              <SummaryTitle>Reservation Summary</SummaryTitle>
              
              <SummaryRow>
                <SummaryLabel>Property</SummaryLabel>
                <SummaryValue>{property.name}</SummaryValue>
              </SummaryRow>
              
              <SummaryRow>
                <SummaryLabel>Dates</SummaryLabel>
                <SummaryValue>
                  {selectedDates.length > 0 
                    ? `${selectedDates[0].toLocaleDateString()} - ${selectedDates[selectedDates.length - 1].toLocaleDateString()}`
                    : 'No dates selected'}
                </SummaryValue>
              </SummaryRow>
              
              <SummaryRow>
                <SummaryLabel>Length of Stay</SummaryLabel>
                <SummaryValue>{daysSelected} {daysSelected === 1 ? 'day' : 'days'}</SummaryValue>
              </SummaryRow>
              
              <SummaryRow>
                <SummaryLabel>Guests</SummaryLabel>
                <SummaryValue>{guestCount}</SummaryValue>
              </SummaryRow>
              
              <SummaryRow>
                <SummaryLabel>Rate per Day</SummaryLabel>
                <SummaryValue>{tokensPerDay} tokens (≈ {formatCurrency(tokensPerDay * tokenPrice)})</SummaryValue>
              </SummaryRow>
              
              <TotalRow>
                <TotalLabel>Total</TotalLabel>
                <TotalValue>
                  {tokensNeeded} tokens (≈ {formatCurrency(tokenValue)})
                </TotalValue>
              </TotalRow>
              
              {paymentMethod === 'tokens' && (
                <TokenImpactSection>
                  <TokenImpactTitle>Token Impact</TokenImpactTitle>
                  <TokenImpactText>
                    Using {tokensNeeded} tokens as payment will remove them from circulation,
                    potentially increasing the value of remaining tokens by approximately 0.5%.
                  </TokenImpactText>
                </TokenImpactSection>
              )}
            </SummarySection>
            
            <BookingButton disabled={selectedDates.length === 0}>
              {selectedDates.length === 0 ? 'Select Dates to Continue' : 'Confirm Reservation'}
            </BookingButton>
          </BookingDetailsContainer>
        </BookingGrid>
      </BookingSection>
    </OwnerBookingContainer>
  );
};

export default OwnerBooking;
