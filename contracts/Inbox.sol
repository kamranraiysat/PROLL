pragma solidity ^0.4.17;

contract Proll {
    string public message;

    function Proll (string pay) public {
        message = pay;

    }

    function Approve (string Approved) public {
        message = Approved;
    }

}
