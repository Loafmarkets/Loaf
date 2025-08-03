import React from 'react';
import styled from 'styled-components';

const RibbonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  padding: 8px 12px;
`;

const AgentPhoto = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

const AgentInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AgentName = styled.span`
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
`;

const AgencyName = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
`;

const AgencyLogo = styled.img`
  height: 24px;
  align-self: center;
`;

const AgentRibbon = ({ agent }) => {
  return (
    <RibbonContainer>
      <AgentPhoto src={agent.photoUrl} alt={agent.name} />
      <AgentInfo>
        <AgentName>{agent.name}</AgentName>
        <AgencyName>{agent.agency}</AgencyName>
      </AgentInfo>
      <AgencyLogo src={agent.agencyLogoUrl} alt={agent.agency} />
    </RibbonContainer>
  );
};

export default AgentRibbon;
