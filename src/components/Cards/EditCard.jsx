import { useContext, useState } from "react";
import { AppContaxt } from "../../store/store";
import {
  Table,
  Button,
  Row,
  Col,
  Card as BCard,
  Form,
  Container,
} from "react-bootstrap";

function EditCard(){
  const {handleEditProduct,items, handleRemoveProduct}=useContext(AppContaxt);
  // edit State
  // useState
  const [editId, setEditId] = useState(null); 
    const [editName, setEditName] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [editImage, setEditImage] = useState("");
    const [editDiscound,seteditDiscound]=useState("");
    const [editDiscussion,seteditDiscussion]=useState("");

    // Edit start
      const handleEditStart = (item) => {
        setEditId(item.id);
        setEditName(item.Product);
        setEditPrice(item.Price);
        setEditImage(item.image);
        seteditDiscussion(item.Discussion);
        seteditDiscound(item.Discound);
      };
    
      // edited data
      const handleSave = () => {
        handleEditProduct(editId, editName, editPrice, editImage,editDiscound,editDiscussion);
        setEditId(null);
        setEditName("");
        setEditPrice("");
        setEditImage("");
        seteditDiscound("");
        seteditDiscussion("");
      };
    
      // Cancel edit
      const handleCancel = () => {
        setEditId(null);
        setEditName("");
        setEditPrice("");
        setEditImage("");
        seteditDiscound("");
        seteditDiscussion("");
      };

      const handleEditImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setEditImage(reader.result);
      reader.readAsDataURL(file);
    }
  };
return(<>

    <tbody>
                {items.map((data) => (
                  <tr key={data.id} className="align-middle">
                    <td>
                      {editId === data.id ? (
                        <Form.Control
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                        />
                      ) : (
                        <span className="fw-semibold">{data.Product}</span>
                      )}
                    </td>
                    <td>
                      {editId === data.id ? (
                        <Form.Control
                          type="text"
                          value={editPrice}
                          onChange={(e) => setEditPrice(e.target.value)}
                        />
                      ) : (
                        <span className="text-muted">{data.Price}</span>
                      )}
                    </td>
                    <td>
                      {editId === data.id ? (
                        <>
                          <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleEditImgChange}
                          />
                          {editImage && (
                            <img
                              src={editImage}
                              alt="preview"
                              style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "cover",
                                borderRadius: "6px",
                                border: "1px solid #dee2e6",
                                marginTop: "5px",
                              }}
                            />
                          )}
                        </>
                      ) : (
                        <img
                          src={data.image}
                          alt={data.Product}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            borderRadius: "6px",
                            border: "1px solid #dee2e6",
                          }}
                        />
                      )}
                    </td>
                    <td>
                      {editId === data.id ? (
                        <Form.Control
                          type="text"
                          value={editDiscound}
                          onChange={(e) => seteditDiscound(e.target.value)}
                        />
                      ) : (
                        <span className="text-muted">{data.Discound}</span>
                      )}
                    </td>
                     <td>
                      {editId === data.id ? (
                        <Form.Control
                          type="text"
                          value={editDiscussion}
                          onChange={(e) => seteditDiscussion(e.target.value)}
                        />
                      ) : (
                        <span className="text-muted">{data.Discussion}</span>
                      )}
                    </td>
                    <td>
                      {editId === data.id ? (
                        <>
                          <Button
                            variant="success"
                            size="sm"
                            className="me-2 fw-bold"
                            onClick={handleSave}
                          >
                            Save
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            className="fw-bold"
                            onClick={handleCancel}
                          >
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="warning"
                            size="sm"
                            className="me-2 fw-bold"
                            onClick={() => handleEditStart(data)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            className="fw-bold"
                            onClick={() => handleRemoveProduct(data.id)}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
                
              </tbody>
</>)
}
export default EditCard;