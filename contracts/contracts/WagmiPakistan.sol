// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

/**
 * @title WagmiPakistan Contract to raise funds for helping Pakistan's flood victims
 * @dev Allow a charity organization give non transferable nfts to contributors
 * @author ABDul Rehman
 */
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract WagmiPakistan is ERC1155, Ownable, ERC1155Supply {

    uint8 public constant BRONZE = 0;
    uint8 public constant SILVER = 1;
    uint8 public constant GOLD = 2;
    uint8 public constant DIAMOND = 3;
    uint8 public constant PLATINUM = 4;

    uint256 totalRaised;

    constructor() ERC1155("ipfs://QmRyezUtChrpvH4i4wKEoPngwTFKHuu4YYjZrSg89wvqVq/") {}

    function mintBronze() public payable  {
        require(msg.value == 0.001 * 10**18, "Not enough ETH sent");
        _mint(msg.sender, BRONZE, 1, "");
        totalRaised = totalRaised + msg.value;
    }
    function mintSteel() public payable {
        require(msg.value == 0.002 * 10**18, "Not enough ETH sent");
        _mint(msg.sender, SILVER, 1, "");
        totalRaised = totalRaised + msg.value;
    }
    function mintGold() public payable {
        require(msg.value == 0.003 * 10**18, "Not enough ETH sent");
        _mint(msg.sender, GOLD, 1, "");
        totalRaised = totalRaised + msg.value;
    }
    function mintDiamond() public payable {
        require(msg.value == 0.004 * 10**18, "Not enough ETH sent");
        _mint(msg.sender, DIAMOND, 1, "");
        totalRaised = totalRaised + msg.value;
    }
    function mintPlatinum() public payable {
        require(msg.value == 0.005 * 10**18, "Not enough ETH sent");
        _mint(msg.sender, PLATINUM, 1, "");
        totalRaised = totalRaised + msg.value;
    }

    function uri(uint256 _id) public view override returns (string memory) {
        // require(exists(_id), "URI: nonexistent token");
        return
            string(
                abi.encodePacked(
                    super.uri(_id),
                    Strings.toString(_id),
                    ".json"
                )
            );
    }

    function withdraw() public onlyOwner {
        (payable(msg.sender)).transfer(address(this).balance);
    }

    function getTotalRaised() external view returns(uint256) {
        return totalRaised;
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}