import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Box, Button, Typography, Alert } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const MyModal = ({ open, handleClose, handleNavigate, jobId }) => {
  const navigate = useNavigate();
  function scheduleLater() {
    navigate(`/blank/allrounds/${jobId}`);
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          borderRadius: 6,
          boxShadow: 24,
          p: 4,
        }}
      >
        {/* Success Alert */}
        <Typography id="modal-title" variant="h6" component="h2">
          <Box
            sx={{
              mb: 2,
              color: "green",
              fontSize: 25,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CheckCircleIcon fontSize="inherit" sx={{ marginX: 2 }} />
            Awesome! You have been shortlisted!
          </Box>
        </Typography>

        {/* Avatar Display */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <img
            src={
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUQEBAWFRUQFhUQEBEVEBAVEBAVFhUWFxYWFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGi0lHR8tLSstLSstNy0tLSstLS0tLS0tLS0tLS0tLSsrLS0tLS0tLS0tLS0tLS0tKystLS0tLf/AABEIAMUBAAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABDEAACAQMBBAcFBAYIBwAAAAAAAQIDBBEhBQYSMQcTIkFRYYEUUnGRoTJCcoIjYpKx0eEzU4OjsrPBwwg0Q3OiwvD/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgX/xAAiEQEBAAMBAQACAQUAAAAAAAAAAQIDESExQVESBBMiMmH/2gAMAwEAAhEDEQA/AJxAAAAAAAAAAAAAAAAAAAAj7efpUt7aUqVrD2mcNJTU1G3i+9cerm1+qsd2c5wEggiy06WpyjmVpB6/drvT5xNtsvpQt6jxVozh5xlGpFfHk/oR/KJ5Xegxdn7RpXEeOjUjOPe4vVeTXNPyZlEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADielfeF2ll1VN4q3WaUWm04Qx25Jrk8NJPzyuQpHFdJ+/sric7G0m40YPhr1YtqVxJc4Ra5U09H72H937UccGcRitfBRyy5QoOUlGK/kdjsPZkaeNNe995TnsmK/XquTUbG2bVkmpQlqtMxwWqtlVoSzUhKPn90kuzpaLQ2sdnxqR4ZRyno0Z5uy60XRjJ9RrsvalWhUVWjUcJR786SXg13ryZMu6W8cb6llpRqwx1lPu/FH9V/Tl5uNt4t1HQ7dHWHNr3f5GFu/tSdtWhWhzg8Sjy4ov7UX5NfXHgXY7FGetOgLdvWjUhGcHmM0pRfimsplw0M4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAHz30nba9q2hVw8wtn7LT/s2+sb8+scl8Io+hD5h9nlWv6sGmo1Lms02mnKLrTf7jnL46x+szYFo8dY1zejOqsYGs23N05Rp0VGMYLDb5Z8EjGs9pVk8qVOa70m0zFnLl6267MfHd274Te2Emctsq5dZLTXwF9tO4oPR04Jd85FePlW5ex2l3bccGsc0RDvDbu3ryTWO7HkSFsratxNJ8VOa54i/tLyZidI2yo1rR10uGdLEs41azqn8y2feqLLzjc9F+1faLFRfO3m6X5dJR+Slj8p15FvQmqkfaIzhJQmqVSnJxajLHGnwtrXuJSNmHxkznoADpyAAAAAAAAAAAAAAAAAAAAAAAAAADXbxX/s1pXuO+jSqVIp98lFuK9XhepBO7MXOpSqOTfDFyWXlt9Um/r9SUemK76vZNWKeHVlTgtea41Jr5RZE25E3wwlzUeshLybfJ+D4XF/DJTu+dX6fzGbfWbrc3358n8fFFNlsRQ4pPRy8Pu650+SNlSeJYMq6qJRyZf52eNc1y+s7ciP6Thfdn+RXvZu8683LDaksfB55r9x5ua31uV36YOs2ncKLUfEj/p+eNLu5sGNJQl9lwjh8OnG288U1ybXJPBuN4aPWWtSm/vRxoteaLtiljJerw404p800336rGnnqdeueTqzudaunOUeNyjGjRhF/d7McNpd2f8AQ6k43dPaEZ3tWhDlTopPEspSU8NebSkvXJ2Rr1f6su+9zoACxSAAAAAAAAAAAAAAAAAAAAAAAAAACK+nu6xb29L35zqP8kYx/wBwhzYl7KhWhJSai5R6xJ6SjnXK79GyWunxa2nwrrn50e4hitzOL72O55JUo47ZTeSTXC38TU7v7VVamk326aSl+slopfx8zNvbRVXl6PueWYbOXlb8cuzxuN3OGEusdVPLxKPGlhNc+eh19WlTnSxCfFwLKbqccvWTeSP9mbPeUuH4Pif8Tu9n7IpcPbipN9zy0vn3i8W5Y4zGXrI2ZJ4/czmekTaTjOhbwm05KdapiTWnKCeO54n8jqbWl1UfKKb9FqyG9o7YldXlSvPTjyox9yEdIx+XPzbOtc6z7L67borq8F/w/wBZRlBfHMZ5+UX8yXyENyanBe28l3tR9HFRf0b+RN5q1Xxl2zlAAWqgAAAAAAAAAAAAAAAAAAAAAAAAAAQ9081f0trHH2YVZZ/FKC/9UQzVnqSv08Xylc0qeP6Km8y8XNp4+SXz8yIllvC1b0S8Wcz7XX4jpdxlm5ku5U5Z+cUjtMYNXujsj2eDlL7dTDl5Jcor5v5m+nTyzHtsuXWzVjccfWfsiok8+B2FtVTjocpsq0WdUdZaRSwkiqfVud8Xrq2bt6uPtSp1EvWD0R84W9XtZ8tPgz6io8j5s3r2TKwvKtvKLUYyboPGk6LfYa8cJqL80zVhGTLL11m4dynXtpNrMasab9Xhf4kTwfLu606ruIQpJylOUeCK75J6fx9D6iLdc51xsveAALFQAAAAAAAAAAAAAAAAAAAAAA8bIk3r6ZIwnKls+nGfC+H2io24Sa5unTWOJeEm18GtWEr3NxClFzqTjCMec5yUYr4t6I4beTpXsbWLVBu5qa4VPSin3cVV6Y/CpEGbe3mub2fHc15VGvsptKEfwwWIx9EaadRsIbXereOvtGvKvXksv7MIR4YQWiSS5vRLVts11hH9LD8UcfNFgrpyaeVzWqfg1yIrqJXtZ9lGytI5kkWNm2calKFWL0qRjUS8FJJ4+pu7CySep52X16U/bYW1DhRtLJZ1Mam9MGbbzS0Ec5NnROC6a1TdjT4knN1oqk8dqPZk54fhhY+R2arMh/pd2n111Ggpdm2h2tdOOphtfsqHzNGF7WbOc9cfuxvBU2fdU7mnGM+rbzTllKcZRcZLiWsdHo9cPGj5P6D3S39stpJRp1OrrPnb1Go1dFrwa4mvOPrg+Z5I8hJppp6ppp96a5NGmKK+wgfPm63Spe2vDCu/aaSwmqjfXxj+rV5vvfb4s8sol/dbfiy2jiNGpw1cZdColGtpzwstTX4WyUOkAAAAAAAAAAAAAAAAAAAAxtp30LajUuKsuGFGEqs34Rim38XpyAjLpw3vdGktnUJYncR4rmSesaLyur+M9c/qp+8iC2jO25tWpeXFW6q/brzdSSzlR5KME+9RioxXlFGC5AeYATPSBTgqR4eoJSp0b3vWWnVt60JOH5ZdqL+sl+U7CDwRZ0Z3vV3nVvlcQcMfrwTnF/JVF+YljgMe7H/Jt05dxX6MjOoIwaMTYUEVYx3lVG2tpwtLapcT5UouWPefKMV5ttL1PnbaN5OtOVSo8yqSc5v3pSeX8F5Eg9L23cyhZRekcVqyXe9VTi/rL9kjeknJ8T5GzXjydY9l7ePOHC1LJeqvLKUsFqsSKqcnFqUW04tSjJNqUWnlNNapp65RSmVtATj0S791L1ys7uSlWpw6ylVxh1oJpSU+7jTcdVjKfLKbcmHy1untR2V7b3Kz+jqZmvepuLjUWO/sz088H1FRqxnFTg04zSlGS5STWU16EoVgAAAAAAAAAAAAAAAEX9PO3Oqs6dnF4ldz4p/9qlhtes3T+KUiUD5v6Zdq+0bWqxT7NtGFvHwylxzf7VRr8oHBzYKZsRYFaPTxM9IS8PUeHqAz9kXroVqdZc6U41MLnJReZR9Vlep9CUaSlFSi8qSUovuaayn8j5xosnrowvVcbNppvMrdu2mvBQw6f93KH1KtuPfVuvLjcqngsbS2lC3pTq1HiNOLlLxwlyXn3Gbd4iRX0o7azw2sXzxVqrxSfYT9U36Ioxx7eLrl51w+0bydzWnXq/aqyc5LwzyivJLCXkkG8LCMeDKp1DWyjZQ9TzJcpRArp0ipl+MdDG4kpPPLD/cB5Rq5l8NF/r/95H0F0Rba9osepk8ztWqfPV05a035YxKPwgfPNrHCySL0QbW6naEabfZuYyovwUsccH8cx4V+MkT2ACXIAAAAAAAAAAAAAoq1FCLlJ4UU5Sfcklls+P7+8derUryWJV5zryWc4dSTm1n4yPp7pKvuo2TdzzhujKjFp4alVxSi16zR8tSAtTKYMqkWmwL6ZVktxK0Ql6VI8SLkUB7S5kodCe0eG4r2zelWmq0F3cVN8MvVxqL9gjBI3e6m1fZL2hcN4jColU1wurmnTm38Iyb9DnKdiYmvem/VPTJAe1791686zf25Nx/CtI/RI6rf/eV1atSlB6a02/L7y9eXzOIwcasfzVu3L5jFSlkqSPEyrJapDIoIsRRkQQSyZ4a54NTW4k2mbWjDXPPwzyNHVuJTa4uaWH8e8FZdF+LNtsi9dCtTrLnRnCql4uElJL6GloyM6gwR9bU5qSUk8qSTT8U+RUabcy46zZ1rNvLdCkpPvcowUZfVM3JLkAAAAAAAAAAAAARl0+3/AAbPpUE9bivHK8YU4ym9PxdWQDIln/iFvM3NrRz/AEdKpVaz/WTjFaf2TIlkBbmWmXJlEVlgXsFSPGeZISuJlcZFpMqTAvcR5OWhbTKZsCpybeW+eoKV3HuQKslSkWmzziAy4SMqkzWQqGRTrBLa0kc9fQ4a1SPhUn/iZurevqaK7rcdWc/enKS+Dk8CFXqLM+hI1tJmdRYRH0f0S3PWbKorOtOVWm9c4/SSkv8AxlE7EjHoJus2txS9yrGovLjgl/tsk4lFAAAAAAAAAAAANfvDtH2W0r3OM+z0qlbh95wg5JerWAPnTpa2p7Tte4aeY0HG1j/ZLt/3kqi9DjZMrq1W25SfFKTcpS75Sby2/NttllsCiTKqPeUyTKVlAXpMo4iniyeOIF6LLkjFi2ZVKlOppCEpPk1GMpP1wQkjrp48vFly+tp0ZuFWnKnJc4TjKMvjh93mbPZuwLlzjLhUHGUZrPaeYtNdlac13tEs29w7jq6VeFObhpFyimoprD5pleWyRdhpuU/SD1qgfQ1fdOyqLt21GNRJLjjSpvK+WppNtbpU5UHGdrCahnhqUEoV6a8Ukstd/D2l5Ef3Z+iabfyhNoYOq3p2FaW1GlOhcTnVqSalSk6bUaai8zfCk0+LhXqzmGiyWWdivLG43lUYPMlNSqkWusJcs1VM054aTjHi1fPtRjhefa+hrYl+nX4W3hPMZww9V24OOfTOV5pGPEkZVJmbRka6mzLoyIEydAlfFa6p+/TpTX5JTT/zF9CZT586Gb9UtqQi3/zFOpR78Zwqi/ysep9BiFAASgAAAAAAAAOU6VKblsa8UZcOKXE3jOVGUZSj+ZJxz3ZAA+X4rQNHgIS8aPMAEoMHmD0EC9a0eOpCnnHWTjDOOXFJLP1JYsrKFKmqVOPDGOiXj4tvvb72AUbr8av6efavqmkb3d20jPMnzTweApi/L4sXe05U7mVDGeHDUs40fdg22zLuUqqWdAB+Syfxe7w7l2V626tFRqP/AK9LFOtnxbWk/wAyZCO+u7HsF1K3VfrElGal1fC8SzhPtPLWOemfBHgNGu3vGPOeNDK1ilkwpgFyt5Thl8zY22zYtJybee7keggZKsafu/vLdxYpRcotrHdzT+YAS6DozoSqbUtYqpw4qxqZUctqHbcef3knHPmfUIBKKAAIAAB//9k="
            }
            alt="User Avatar"
          />
        </Box>
        <Typography id="modal-description">
          <Alert
            icon={<TipsAndUpdatesIcon fontSize="inherit" />}
            severity="info"
            sx={{ mb: 2 }}
          >
            This quick interview takes only 10-15 minutes. Get started now.
          </Alert>
        </Typography>
        <Typography
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            className="w-full rounded-3xl px-2 py-3 font-semibold my-2 text-white bg-[#236aac]"
            onClick={handleNavigate}
          >
            Start Interview Now
          </button>
          <Button onClick={scheduleLater}>Schedule it later</Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default MyModal;
