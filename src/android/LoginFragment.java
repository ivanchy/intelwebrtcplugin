/*
 * Copyright (C) 2018 Intel Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
package owt.sample.conference;

import android.content.Context;
import android.os.Bundle;
//import android.support.v4.app.Fragment;
import androidx.fragment.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;

public class LoginFragment extends Fragment {
    private EditText serverEditText;

    public LoginFragment() {
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState) {
        //View mView = inflater.inflate(R.layout.fragment_login, container, false);
        View mView = inflater.inflate(getResources().getIdentifier("fragment_login", "layout", getActivity().getPackageName()), container, false);
        //serverEditText = mView.findViewById(R.id.server_url);
        serverEditText = mView.findViewById(getResources().getIdentifier("server_url","id", getActivity().getPackageName()));
        serverEditText.setText("https://172.2.255.122:3004");
        return mView;
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
    }

    @Override
    public void onDetach() {
        super.onDetach();
    }

    String getServerUrl() {
        return serverEditText.getText().toString();
    }
}
