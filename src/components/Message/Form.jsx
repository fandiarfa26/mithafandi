import React from 'react'

const MessageForm = () => {
  return (
    <div>
      <form action="" method="POST">
        <label htmlFor="name">
          <span>Nama</span>
          <br />
          <input type="text" id="name" placeholder="Tulis namamu" />
        </label>
        <br />
        <label htmlFor="message">
          <span>Ucapan</span>
          <br />
          <textarea id="message" cols="30" rows="10" placeholder="Beri ucapan terbaikmu"></textarea>
        </label>
        <br />
        <label htmlFor="confirm">
          <span>Konfirmasi</span>
          <br />
          <select id="confirm">
            <option value="">-- pilih --</option>
            <option value="hadir">Hadir</option>
            <option value="tidak hadir">Tidak Hadir</option>
          </select>
        </label>
        <div>
          <button type="submit">Kirim ucapan</button>
        </div>
      </form>
    </div>
  )
}

export default MessageForm