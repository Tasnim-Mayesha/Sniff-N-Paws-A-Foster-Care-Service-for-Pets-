import { useEffect, useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import RemoveComponentPopup from "../components/RemoveComponentPopup";
import AddComponentPopup from "../components/AddComponentPopup";
import { useNavigate } from "react-router-dom";

const ViewComponentPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
  const [isEditComponentPopupOpen, setEditComponentPopupOpen] = useState(false);
  const [isAddComponentPopupOpen, setAddComponentPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState("");

  const onViewMembers1Click = () => {
    navigate("/view-member-page");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3002/customer")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error(error));
  };

  if (!data) {
    return "loading.........";
  }

  const onViewMembersClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onFundManagementContainerClick = () => {
    navigate("/fund-management-page");
  };

  const onFundManagementClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onComponentsContainerClick = () => {
    navigate("/view-component-page");
  };

  const onComponentsClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const openConfirmLogoutPopup = () => {
    setConfirmLogoutPopupOpen(true);
  };

  const closeConfirmLogoutPopup = () => {
    setConfirmLogoutPopupOpen(false);
  };

  const onLogoutClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onEditProfileClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onRequestsContainerClick = () => {
    navigate("/request-page");
  };

  const onRequestsClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onRequestsContainer1Click = () => {
    navigate("/assign-tasks");
  };

  const onRequests1Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onComponents1Click = () => {
    navigate("/team-lead-profile");
  };

  const openEditComponentPopup = () => {
    setEditComponentPopupOpen(true);
  };

  const closeEditComponentPopup = () => {
    setEditComponentPopupOpen(false);
  };

  const openAddComponentPopup = () => {
    setAddComponentPopupOpen(true);
  };

  const closeAddComponentPopup = () => {
    setAddComponentPopupOpen(false);
  };

  const onRequests2Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // const filtered = data.
    // setData(filtered);
  };

  return (
    <>
      <div className="relative bg-white w-full h-[950px] overflow-hidden text-center text-13xl text-white font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[442px] h-[950px]" />
        <b className="absolute top-[64px] left-[65px] inline-block w-[310px] h-[62px]">
          D A S H B O A R D
        </b>
        <div className="absolute top-[137.5px] left-[34.5px] box-border w-[354px] h-px border-t-[1px] border-solid border-white" />
        <div
          className="absolute top-[280px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onViewMembers1Click}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[76px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onViewMembersClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              View Members
            </div>
          </button>
        </div>
        <div
          className="absolute top-[355px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onFundManagementContainerClick}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onFundManagementClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Fund Management
            </div>
          </button>
        </div>
        <div
          className="absolute top-[432px] left-[1px] bg-firebrick-600 flex flex-col items-start justify-start cursor-pointer"
          onClick={onComponentsContainerClick}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[76px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onComponentsClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Components
            </div>
          </button>
        </div>
        <div
          className="absolute top-[819px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={openConfirmLogoutPopup}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[78px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onLogoutClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Logout
            </div>
          </button>
        </div>
        <div className="absolute top-[739px] left-[1px] flex flex-col items-start justify-start">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-20 flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onEditProfileClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Edit Profile
            </div>
          </button>
        </div>
        <div
          className="absolute top-[585px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onRequestsContainerClick}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequestsClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Requests
            </div>
          </button>
        </div>
        <div
          className="absolute top-[508px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onRequestsContainer1Click}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests1Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Tasks
            </div>
          </button>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[202px] left-[0px] w-[442px] h-[77px] hover:bg-firebrick-200 hover:cursor-pointer"
          onClick={onComponents1Click}
        >
          <div className="absolute h-[57.14%] w-[34.84%] top-[21.43%] left-[32.58%] text-xl font-semibold font-inter text-white text-center flex items-center justify-center hover:text-white">
            Profile
          </div>
        </button>
        <label
          className="absolute top-[79px] left-[439px] font-archivo-black text-black inline-block w-[1253px] h-[61px]"
          id="studentname"
        >{`Component Inventory `}</label>
        /*
        <div className="absolute top-[137.5px] left-[482.5px] box-border w-[1145px] h-px border-t-[1px] border-solid border-dimgray-400" />
        //table
        <div></div>
        //table
        <div>
          <table className="absolute top-[261px] left-[488px] w-[1132.54px] h-[41px] text-lg text-black">
            <thead className="bg-red-500 text-white">
              <tr>
                <th>Comp ID.</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Functionality</th>
                <th>Price</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter(
                  (component) =>
                    component.COMPONENT_MODEL.toLowerCase().includes(
                      searchTerm
                    ) ||
                    component.FUNCTIONALITY.toLowerCase().includes(searchTerm)
                )
                .map((component, index) => (
                  <tr key={component.COMP_ID}>
                    <td>{component.COMP_ID}</td>
                    <td>{`${component.COMPONENT_MODEL}`}</td>
                    <td>{component.QUANTITY}</td>
                    <td>{component.FUNCTIONALITY}</td>
                    <td>{component.PRICE}</td>
                    <td>
                      {" "}
                      {/* Edit button */}
                      <button
                        id="edit_button"
                        onClick={() => {
                          openEditComponentPopup();
                          setSelectedComponent(component);
                        }}
                        className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition-colors duration-300"
                      >
                        <img
                          src="logo.png"
                          alt="Edit"
                          className="w-6 h-6 mr-2"
                        />{" "}
                        {/* Replace "edit-logo.png" with your edit logo file path */}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>{" "}
        //table
        <div
          className="absolute top-[836px] left-[955px] w-[221px] h-[58px] flex flex-row items-center justify-center cursor-pointer"
          onClick={openAddComponentPopup}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen rounded w-[168px] h-[51px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-base leading-[100%] font-poppins text-white text-center">
              Add Component
            </b>
          </button>
        </div>
        <input
          className="font-poppins text-base bg-[transparent] absolute top-[185px] left-[883px] rounded-xl box-border w-[413px] h-[37px] flex flex-col py-0 pr-[11px] pl-4 items-start justify-center border-[1px] border-solid border-black"
          type="text"
          placeholder="Search here.."
          value={searchTerm}
          onChange={handleSearch}
        />
        <img
          className="absolute top-[190px] left-[846px] w-8 h-[29px] object-cover"
          alt=""
          src="/searchremovebgpreview-1@2x.png"
        />
        <div className="absolute top-[662px] left-[1px] flex flex-col items-start justify-start cursor-pointer">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests2Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Announcements
            </div>
          </button>
        </div>
      </div>
      {isConfirmLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirmLogoutPopup}
        >
          <ConfirmLogoutPopup onClose={closeConfirmLogoutPopup} />
        </PortalPopup>
      )}
      {isEditComponentPopupOpen && selectedComponent && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditComponentPopup}
        >
          <RemoveComponentPopup
            component={selectedComponent}
            onClose={closeEditComponentPopup}
          />
        </PortalPopup>
      )}
      {isAddComponentPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddComponentPopup}
        >
          <AddComponentPopup onClose={closeAddComponentPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ViewComponentPage;
