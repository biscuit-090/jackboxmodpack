import { useState, useEffect } from "react";
import ImageLink from "../ImageLink";
import NotAvailable from "../NotAvailable";
import PageHeader from "../PageHeader";
import LargeTitle, { MediumTitle, SmallTitle } from "../Titles";
import Description from "../Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCode, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import './Packs.css';

interface PackProps {

}

const Pack10: React.FC<PackProps> = ({  }) => {
    return (
        <div style={{padding: '15px', flexDirection: 'column'}}>
            <PageHeader text='Jackbox Party Pack 10' />
            <NotAvailable text='This game is too new. Check back later.' />
        </div>
    );
}
  
export default Pack10;
